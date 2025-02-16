import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { storage } from "wxt/storage";

// Translations
const resources = {
  en: {
    translation: {
      delete_facebook_message: "Delete Facebook Messages",
      archive_message: "Archive Messages",
      language: "Language",
      navigate_fb_messages: "Click to go to facebook messages",
    },
  },
  bn: {
    translation: {
      delete_facebook_message: "ফেসবুক মেসেজ মুছুন",
      archive_message: "মেসেজ আর্কাইভ করুন",
      language: "ভাষা",
      navigate_fb_messages: "যান",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: await storage.getItem("local:language", {
    fallback: "en",
  }),
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
