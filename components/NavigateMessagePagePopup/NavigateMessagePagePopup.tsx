import { useTranslation } from "react-i18next";

const NavigateMessagePagePopup = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white h-full">
      <div className="bg-[#2196f3] p-5 text-[18px]">
        <h5 className="text-center text-white">
          {" "}
          {t("delete_facebook_message")}{" "}
        </h5>
      </div>
      <div className="my-5 px-5">
        <p className="text-gray-500 max-w-[100ch] text-center text-sm">
          You're on the wrong page. Head back to Facebook messages and click the
          extension icon again.
        </p>
        <a
          onClick={() => window.close()}
          target="_Main"
          href="https://web.facebook.com/messages"
          className="bg-[#2196f3] text-center px-5 my-5 py-2  rounded-md w-full h-[30px] text-white flex flex-col justify-center items-center border-none"
          style={{ fontWeight: "bold", display: "inline-block" }}
        >
          {t("navigate_fb_messages")}
        </a>
      </div>
    </div>
  );
};

export default NavigateMessagePagePopup;
