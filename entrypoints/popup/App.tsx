import { useState } from "react";
import "./App.css";
import ArchiveMessagePopup from "@/components/ArchiveMessagePopup/ArchiveMessagePopup";
import NavigateMessagePagePopup from "@/components/NavigateMessagePagePopup/NavigateMessagePagePopup";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  const MESSAGES_URL = "https://www.facebook.com/messages/";
  const [isMessagesPage, setIsMessagesPage] = useState<
    boolean | null | undefined
  >(null);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const url = tabs[0].url;
        setIsMessagesPage(url?.startsWith(MESSAGES_URL));
      } else {
        setIsMessagesPage(false);
      }
      if (tabs?.[0]?.id) {
        chrome.tabs.detectLanguage(tabs[0].id, async function (lang) {
          await storage.setItem("local:language", lang);
          i18n.changeLanguage(lang);
        });
      }
    });
  }, []);

  if (isMessagesPage === null) {
    return <div className="text-center p-5">Loading...</div>;
  }

  return (
    <>
      {!isMessagesPage ? <NavigateMessagePagePopup /> : <ArchiveMessagePopup />}
    </>
  );
}

export default App;
