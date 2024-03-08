import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import transEn from "./public/locales/en/transEn.json";
import transEs from "./public/locales/es/transEs.json";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
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
