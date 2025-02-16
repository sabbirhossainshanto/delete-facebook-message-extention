import { useEffect, useState } from "react";
import { storage } from "wxt/storage";
interface IFriends {
  name: string;
  image: string;
  id: number;
  innerHtml: Element;
}
const Sidebar = () => {
  const [extractFriend, setExtractFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<IFriends[]>([]);
  const [friends, setFriend] = useState<IFriends[]>([]);

  const handleCloseSidebar = async () => {
    await storage.setItem("local:delete-facebook-message-sidebar", "close");
    const sidebar = document.getElementById("delete-facebook-message-sidebar");
    if (sidebar) {
      sidebar.style.display = "none";
    }
    const facebookTabs = await browser.tabs.query({
      url: "*://*.facebook.com/messages*",
    });

    await Promise.all(
      facebookTabs.map((tab) => tab.id && browser.tabs.reload(tab.id))
    );
  };

  useEffect(() => {
    setTimeout(() => {
      const extractChats = () => {
        let persons: IFriends[] = [];
        const chatContainer = document.querySelector('[aria-label="Chats"]');

        if (chatContainer) {
          const chatDivs = chatContainer.querySelectorAll(
            'div.x78zum5.xdt5ytf[data-virtualized="false"]'
          );

          chatDivs.forEach((chatDiv, idx) => {
            const firstSpan = chatDiv.querySelector("span");
            const firstImage = chatDiv.querySelector("img");
            if (firstSpan && firstImage) {
              persons.push({
                image: firstImage.src,
                name: firstSpan.innerText,
                id: idx + 1,
                innerHtml: chatDiv,
              });
            }
          });

          if (persons?.length > 0) {
            setFriend(persons);
          }
        } else {
          console.log("Chats container not found");
        }
      };

      extractChats();
    }, 10000);
  }, [extractFriend]);

  const deleteSelectedChats = () => {
    selectedFriend.forEach((friend) => {
      const menuDiv = friend.innerHtml?.querySelector(
        '[aria-label="Menu"]'
      ) as HTMLElement;
      if (menuDiv) {
        menuDiv.click();
        setTimeout(() => {
          const menuElement = document.querySelector(
            '[aria-label="More options for this chat"][role="menu"]'
          );

          if (menuElement) {
            const deleteChatDiv = Array.from(
              menuElement.querySelectorAll("[role='menuitem']")
            ).find(
              (button) => button?.textContent?.trim() === "Archive chat"
            ) as HTMLElement;
            if (deleteChatDiv) {
              deleteChatDiv.click();
              setTimeout(() => {
                const deleteModal = document.querySelector(
                  '[aria-label="Delete chat"][role="dialog"]'
                );
                if (deleteModal) {
                  const deleteButtons = deleteModal.querySelectorAll(
                    '[aria-label="Delete chat"][role="button"]'
                  );

                  const lastDeleteButton = deleteButtons[
                    deleteButtons.length - 1
                  ] as HTMLElement;
                  if (lastDeleteButton) {
                    lastDeleteButton.click();
                    setExtractFriend((prev) => !prev);
                  }
                }
              }, 500);
            }
          } else {
            console.log("Menu not found, maybe still loading...");
          }
        }, 500);
      } else {
        console.log("Menu div not found");
      }
    });
  };

  console.log(friends);
  return (
    <div
      id="delete-facebook-message-sidebar"
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "400px",
        background: "#fff",
        padding: "10px",
        zIndex: 9999,
        overflowY: "auto",
        maxHeight: "100vh",
      }}
    >
      <button onClick={handleCloseSidebar} className="cursor-pointer">
        Close
      </button>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <p>Select All</p>
          <input
            onChange={() =>
              setSelectedFriend(selectedFriend?.length > 0 ? [] : friends)
            }
            checked={selectedFriend?.length === friends?.length}
            type="checkbox"
          />
        </div>
        <button
          onClick={deleteSelectedChats}
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Delete Selected Chat
        </button>
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          margin: "20px 0px",
        }}
      >
        {friends &&
          friends.map((friend, index) => (
            <li key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "5px",
                  border: "1px solid gray",
                  padding: "3px 5px",
                  borderRadius: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <img
                    style={{ height: "30px", borderRadius: "100%" }}
                    src={friend?.image}
                    alt=""
                  />
                  <h4>{friend.name}</h4>
                </div>
                <input
                  onChange={() =>
                    setSelectedFriend(
                      selectedFriend?.find((f) => f?.id === friend?.id)
                        ? selectedFriend?.filter((f) => f?.id !== friend?.id)
                        : [...selectedFriend, friend]
                    )
                  }
                  checked={
                    selectedFriend?.find((f) => f?.id === friend?.id)
                      ? true
                      : false
                  }
                  style={{ backgroundColor: "white" }}
                  type="checkbox"
                />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
