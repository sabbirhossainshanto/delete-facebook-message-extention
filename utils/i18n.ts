import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      delete_facebook_message: "Delete Facebook Messages",
      open_message_sidebar: "Open Message Sidebar",
      language: "Language",
      close: "Close",
      select_all: "Select All",
      delete_selected_chat: "Delete Selected Chat",
      archive_selected_chat: "Archive Selected Chat",
      navigate_fb_messages: "Navigate Facebook Message",
      wrong_page: "😔 Oops! Wrong Page!",
      navigate_fb_message_description:
        "👉 Please click the button below to proceed to the correct page.",
      change_lang_description:
        "👉 You can select the language from Facebook by your choice.",
    },
  },
  bn: {
    translation: {
      delete_facebook_message: "ফেসবুক মেসেজ মুছুন",
      open_message_sidebar: "মেসেজ সাইডবার খুলুন",
      language: "ভাষা",
      close: "বন্ধ করুন",
      select_all: "সব নির্বাচন করুন",
      delete_selected_chat: "নির্বাচিত চ্যাট মুছুন",
      archive_selected_chat: "নির্বাচিত চ্যাট আর্কাইভ করুন",
      navigate_fb_messages: "ফেসবুক মেসেজে নেভিগেট করুন",
      wrong_page: "😔 ওহো! ভুল পৃষ্ঠায় এসেছেন!",
      navigate_fb_message_description:
        "👉 সঠিক পৃষ্ঠায় যেতে নিচের বোতামটি ক্লিক করুন।",
      change_lang_description:
        "👉 আপনি ফেসবুক থেকে আপনার পছন্দের ভাষা নির্বাচন করতে পারেন।",
    },
  },
  es: {
    translation: {
      delete_facebook_message: "Eliminar mensajes de Facebook",
      open_message_sidebar: "Abrir barra lateral de mensajes",
      language: "Idioma",
      close: "Cerrar",
      select_all: "Seleccionar todo",
      delete_selected_chat: "Eliminar chat seleccionado",
      archive_selected_chat: "Archivar chat seleccionado",
      navigate_fb_messages: "Navegar a mensajes de Facebook",
      wrong_page: "😔 ¡Vaya! ¡Página incorrecta!",
      navigate_fb_message_description:
        "👉 Haz clic en el botón de abajo para ir a la página correcta.",
      change_lang_description:
        "👉 Puedes seleccionar el idioma de Facebook según tu elección.",
    },
  },
  fr: {
    translation: {
      delete_facebook_message: "Supprimer les messages Facebook",
      open_message_sidebar: "Ouvrir la barre latérale des messages",
      language: "Langue",
      close: "Fermer",
      select_all: "Tout sélectionner",
      delete_selected_chat: "Supprimer le chat sélectionné",
      archive_selected_chat: "Archiver le chat sélectionné",
      navigate_fb_messages: "Naviguer vers les messages Facebook",
      wrong_page: "😔 Oups ! Mauvaise page !",
      navigate_fb_message_description:
        "👉 Cliquez sur le bouton ci-dessous pour accéder à la bonne page.",
      change_lang_description:
        "👉 Vous pouvez sélectionner la langue de Facebook selon votre choix.",
    },
  },
  de: {
    translation: {
      delete_facebook_message: "Facebook-Nachrichten löschen",
      open_message_sidebar: "Nachrichten-Seitenleiste öffnen",
      language: "Sprache",
      close: "Schließen",
      select_all: "Alle auswählen",
      delete_selected_chat: "Ausgewählten Chat löschen",
      archive_selected_chat: "Ausgewählten Chat archivieren",
      navigate_fb_messages: "Zu Facebook-Nachrichten navigieren",
      wrong_page: "😔 Ups! Falsche Seite!",
      navigate_fb_message_description:
        "👉 Bitte klicken Sie auf die Schaltfläche unten, um zur richtigen Seite zu gelangen.",
      change_lang_description:
        "👉 Sie können die Sprache von Facebook nach Ihrer Wahl auswählen.",
    },
  },
  it: {
    translation: {
      delete_facebook_message: "Elimina messaggi di Facebook",
      open_message_sidebar: "Apri la barra laterale dei messaggi",
      language: "Lingua",
      close: "Chiudi",
      select_all: "Seleziona tutto",
      delete_selected_chat: "Elimina chat selezionata",
      archive_selected_chat: "Archivia chat selezionata",
      navigate_fb_messages: "Naviga nei messaggi di Facebook",
      wrong_page: "😔 Ops! Pagina sbagliata!",
      navigate_fb_message_description:
        "👉 Fai clic sul pulsante qui sotto per accedere alla pagina corretta.",
      change_lang_description:
        "👉 Puoi selezionare la lingua di Facebook a tua scelta.",
    },
  },
  pt: {
    translation: {
      delete_facebook_message: "Excluir mensagens do Facebook",
      open_message_sidebar: "Abrir barra lateral de mensagens",
      language: "Idioma",
      close: "Fechar",
      select_all: "Selecionar tudo",
      delete_selected_chat: "Excluir chat selecionado",
      archive_selected_chat: "Arquivar chat selecionado",
      navigate_fb_messages: "Navegar para mensagens do Facebook",
      wrong_page: "😔 Oops! Página errada!",
      navigate_fb_message_description:
        "👉 Clique no botão abaixo para acessar a página correta.",
      change_lang_description:
        "👉 Você pode selecionar o idioma do Facebook conforme sua escolha.",
    },
  },
  hi: {
    translation: {
      delete_facebook_message: "फेसबुक संदेश हटाएं",
      open_message_sidebar: "संदेश साइडबार खोलें",
      language: "भाषा",
      close: "बंद करें",
      select_all: "सभी चुनें",
      delete_selected_chat: "चयनित चैट हटाएं",
      archive_selected_chat: "चयनित चैट संग्रहीत करें",
      navigate_fb_messages: "फेसबुक संदेशों पर जाएं",
      wrong_page: "😔 ओह! गलत पृष्ठ!",
      navigate_fb_message_description:
        "👉 सही पृष्ठ पर जाने के लिए नीचे दिए गए बटन पर क्लिक करें।",
      change_lang_description:
        "👉 आप अपनी पसंद से फेसबुक की भाषा चुन सकते हैं।",
    },
  },
  ar: {
    translation: {
      delete_facebook_message: "حذف رسائل الفيسبوك",
      open_message_sidebar: "افتح الشريط الجانبي للرسائل",
      language: "اللغة",
      close: "إغلاق",
      select_all: "تحديد الكل",
      delete_selected_chat: "حذف الدردشة المحددة",
      archive_selected_chat: "أرشفة الدردشة المحددة",
      navigate_fb_messages: "التنقل في رسائل الفيسبوك",
      wrong_page: "😔 عذرًا! الصفحة خاطئة!",
      navigate_fb_message_description:
        "👉 انقر على الزر أدناه للانتقال إلى الصفحة الصحيحة.",
      change_lang_description: "👉 يمكنك اختيار اللغة من الفيسبوك حسب رغبتك.",
    },
  },
  zh: {
    translation: {
      delete_facebook_message: "删除 Facebook 消息",
      open_message_sidebar: "打开消息侧边栏",
      language: "语言",
      close: "关闭",
      select_all: "全选",
      delete_selected_chat: "删除所选聊天",
      archive_selected_chat: "存档所选聊天",
      navigate_fb_messages: "导航至 Facebook 消息",
      wrong_page: "😔 哎呀！错误页面！",
      navigate_fb_message_description: "👉 请点击下面的按钮前往正确的页面。",
      change_lang_description: "👉 您可以从 Facebook 选择您喜欢的语言。",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
