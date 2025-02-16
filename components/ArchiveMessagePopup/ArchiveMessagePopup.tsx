import { useShowSidebar } from "@/store/sidebar";
import { useTranslation } from "react-i18next";
import { storage } from "wxt/storage";
const ArchiveMessagePopup = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (lang: string) => {
    await storage.setItem("local:language", lang);
    i18n.changeLanguage(lang);
  };

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
    <div className="bg-white h-full w-full">
      <div className="bg-[#2196f3] p-5 text-[18px] w-full">
        <h5 className="text-center text-white">
          {t("delete_facebook_message")}{" "}
        </h5>
      </div>
      <div className="my-5 px-5">
        <div className="mt-4">
          <label className="block text-sm font-semibold">{t("language")}</label>
          <select
            className="border rounded p-1 w-full"
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
            <option value="hi">हिन्दी</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="ar">العربية</option>
          </select>
        </div>
        <button
          onClick={handleShowSidebar}
          className="bg-[#2196f3] text-center px-5 my-5  rounded-md w-full h-[30px] text-white flex flex-col justify-center items-center border-none"
          style={{ fontWeight: "500", display: "inline-block" }}
        >
          {t("archive_message")}
        </button>
      </div>
    </div>
  );
};

export default ArchiveMessagePopup;
