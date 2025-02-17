import { useTranslation } from "react-i18next";
const ArchiveMessagePopup = () => {
  const { t, i18n } = useTranslation();

  const handleShowSidebar = async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs?.[0]?.id) {
        chrome.tabs.sendMessage(
          tabs?.[0].id,
          {
            message: "showSidebar",
          },
          function (response) {}
        );
      }
    });
    window.close();
  };
  return (
    <div className="h-full">
      <div className="bg-[#2196f3] p-5 text-[18px]">
        <h5 className="text-center text-white">
          {t("delete_facebook_message")}
        </h5>
      </div>
      <div className="my-5 px-5">
        <a
          onClick={handleShowSidebar}
          className="w-full bg-[#2196f3] text-white px-3 py-2 rounded-md font-bold text-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block text-center"
        >
          {t("open_message_sidebar")}
        </a>
      </div>
    </div>
  );
};

export default ArchiveMessagePopup;
