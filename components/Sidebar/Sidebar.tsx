import { useEffect, useState } from "react";
import "@/entrypoints/popup/App.css";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
interface IFriends {
  name: string;
  image: string;
  id: string;
  innerHtml: Element;
}
const Sidebar = () => {
  const [extractFriend, setExtractFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<IFriends[]>([]);
  const [friends, setFriends] = useState<IFriends[]>([]);

  const handleCloseSidebar = async () => {
    document.getElementById("fb-sidebar-container")?.remove();
  };

  useEffect(() => {
    const extractChats = () => {
      const friends: IFriends[] = [];
      const chatContainer = document.querySelector('[aria-label="Chats"]');

      if (chatContainer) {
        const chatDivs = chatContainer.querySelectorAll(
          'div.x78zum5.xdt5ytf[data-virtualized="false"]'
        );

        chatDivs.forEach((chatDiv, idx) => {
          const friendName = chatDiv.querySelector(
            "span[dir='auto']"
          ) as HTMLElement | null;

          const friendImage = chatDiv.querySelector("img");
          if (friendName && friendImage) {
            friends.push({
              image: friendImage.src,
              name: friendName.innerText,
              id: uuidv4(),
              innerHtml: chatDiv,
            });
          }
        });

        if (friends?.length > 0) {
          setFriends(friends);
        }
      } else {
        toast.error("Chat not found");
      }
    };

    extractChats();
  }, [extractFriend]);

  const handleChatAction = async (action: "archive" | "delete") => {
    for (let i = 0; i < selectedFriend.length; i++) {
      const friend = selectedFriend[i];

      const menuDiv = friend.innerHtml?.querySelector(
        '[aria-label="Menu"]'
      ) as HTMLElement;

      if (!menuDiv) {
        toast.error("Menu div not found");
        continue;
      }

      menuDiv.click();

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const menuElement = document.querySelector(
        '[aria-label="More options for this chat"][role="menu"]'
      ) as HTMLElement;

      if (!menuElement) {
        toast.error("Menu not found, maybe still loading...");
        continue;
      }

      let actionIcon: HTMLElement | null = null;

      if (action === "archive") {
        actionIcon = [...menuElement.querySelectorAll("i")].find((icon) =>
          icon.style.backgroundImage.includes("xAljGE-8t8Y.png")
        ) as HTMLElement;
      } else if (action === "delete") {
        actionIcon = [...menuElement.querySelectorAll("svg")].find(
          (svg) =>
            svg.getAttribute("viewBox") === "0 0 20 20" &&
            svg.querySelector(
              "[d='M109.327 196.5H93.673a1.17 1.17 0 0 0-1.173 1.167v1.666a1.17 1.17 0 0 0 1.173 1.167h15.654a1.17 1.17 0 0 0 1.173-1.167v-1.666a1.17 1.17 0 0 0-1.173-1.167zM109 199H94v-1h15v1z']"
            )
        )?.parentElement as HTMLElement;
      }

      if (!actionIcon) {
        toast.error(`${action} icon not found`);
        continue;
      }

      actionIcon.click();
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (action === "archive") {
        const filterFriend = friends.filter((f) => f.id !== friend.id);

        setFriends(filterFriend);
        toast.success(`Friend archived: ${friend.name}`);
      } else if (action === "delete") {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const actionModal = document.querySelector(
          `[role="dialog"]`
        ) as HTMLElement;
        if (!actionModal) {
          toast.error("Delete modal not found");
          continue;
        }

        const buttons = actionModal.querySelectorAll(
          '[aria-label="Delete chat"]'
        );
        const confirmButton = buttons[buttons.length - 1] as HTMLElement;

        if (confirmButton) {
          confirmButton.click();
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const filterFriend = friends.filter((f) => f.id !== friend.id);

          setFriends(filterFriend);
        }
      }
    }

    setExtractFriend((prev) => !prev);
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-[400px] bg-white p-2 z-[9999] overflow-y-auto max-h-screen shadow-lg">
        <div className="flex justify-end">
          <button
            onClick={handleCloseSidebar}
            className="absolute top-0 right-0 cursor-pointer p-2 text-white bg-red-500"
          >
            Close
          </button>
        </div>
        <div className="flex justify-between mt-10">
          <label
            htmlFor="selectAll"
            className="bg-blue-500 text-white rounded-md px-2 py-1 hover:bg-blue-600 transition flex items-center gap-3 cursor-pointer"
          >
            <p>Select All</p>
            <input
              onChange={() =>
                setSelectedFriend(selectedFriend?.length > 0 ? [] : friends)
              }
              checked={selectedFriend?.length === friends?.length}
              type="checkbox"
              className="w-4 h-4 accent-blue-500"
              id="selectAll"
            />
          </label>

          <button
            onClick={() => handleChatAction("delete")}
            className="bg-blue-500 text-white rounded-md px-2 py-1 hover:bg-blue-600 transition"
          >
            Delete Selected Chat
          </button>
          <button
            onClick={() => handleChatAction("archive")}
            className="bg-blue-500 text-white rounded-md px-2 py-1 hover:bg-blue-600 transition"
          >
            Archive Selected Chat
          </button>
        </div>
        <ul className="flex flex-col gap-2 mt-5">
          {friends &&
            friends.map((friend, index) => (
              <li key={index}>
                <div className="flex justify-between gap-2 border border-gray-300 p-2 rounded-md shadow-sm">
                  <div className="flex items-center gap-2">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={friend?.image}
                      alt=""
                    />
                    <h4 className="text-gray-800">{friend.name}</h4>
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
                    type="checkbox"
                    className="w-4 h-4 accent-blue-500"
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
      <Toaster />
    </>
  );
};

export default Sidebar;
