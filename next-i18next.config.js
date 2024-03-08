import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import transEn from "./public/locales/en/transEn.json";
import transEs from "./public/locales/es/transEs.json";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: transEn,
    },
    es: {
      translation: transEs,
    },
  },
  debug: true,
});
