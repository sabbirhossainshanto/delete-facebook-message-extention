import { useState } from "react";
import "./App.css";
import { storage } from "wxt/storage";

function App() {
  const MESSAGES_URL = "https://www.facebook.com/messages/";
  const [isMessagesPage, setIsMessagesPage] = useState<
    boolean | null | undefined
  >(null);

  useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const url = tabs[0].url;
        setIsMessagesPage(url?.startsWith(MESSAGES_URL));
      } else {
        setIsMessagesPage(false);
      }
    });
  }, []);

  const handleShowSidebar = async () => {
    await storage.setItem("local:delete-facebook-message-sidebar", "open");

    const facebookTabs = await chrome.tabs.query({
      url: "*://*.facebook.com/messages*",
    });

    await Promise.all(
      facebookTabs.map((tab) => tab.id && chrome.tabs.reload(tab.id))
    );
  };

  if (isMessagesPage === null) {
    return <div className="text-center p-5">Loading...</div>;
  }

  return (
    <>
      {!isMessagesPage ? (
        <div className="bg-white h-full">
          <div className="bg-[#2196f3] p-5 text-[18px]">
            <h5 className="text-center text-white">
              {" "}
              Delete Facebook Messages{" "}
            </h5>
          </div>
          <div className="my-5 px-5">
            <p className="text-gray-500 max-w-[100ch] text-center text-sm">
              {" "}
              You're on the wrong page. Head back to Facebook messages and click
              the extension icon again.{" "}
            </p>
            <a
              target="_black"
              href="https://web.facebook.com/messages"
              className="bg-[#2196f3] text-center px-5 my-5  rounded-md w-full h-[30px] text-white flex flex-col justify-center items-center border-none"
              style={{ fontWeight: "bold", display: "inline-block" }}
            >
              Click To Go To Facebook Messages
            </a>
          </div>
        </div>
      ) : (
        <div className="bg-white h-full">
          <div className="bg-[#2196f3] p-5 text-[18px]">
            <h5 className="text-center text-white">
              {" "}
              Delete Facebook Messages{" "}
            </h5>
          </div>
          <div className="my-5 px-5">
            <p className="text-gray-500 max-w-[100ch] text-start text-sm">
              {" "}
              1- Switch your Facebook language to English first.
            </p>
            <p className="text-gray-500 max-w-[100ch] text-start text-sm">
              {" "}
              2- Click on any conversation item on the Facebook page before
              continuing.
            </p>

            <button
              onClick={handleShowSidebar}
              className="bg-[#2196f3] text-center px-5 my-5  rounded-md w-full h-[30px] text-white flex flex-col justify-center items-center border-none"
              style={{ fontWeight: "bold", display: "inline-block" }}
            >
              Archive Messages
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
