import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { storage } from "wxt/storage";

// Translations
const resources = {
  en: {
    translation: {
      delete_facebook_message: "Delete Facebook Messages",
      open_message_sidebar: "Open Message Sidebar",
      language: "Language",
      navigate_fb_messages: "Go To Facebook Messages",
    },
  },
  bn: {
    translation: {
      delete_facebook_message: "ফেসবুক মেসেজ মুছুন",
      open_message_sidebar: "Open Message Sidebar",
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
