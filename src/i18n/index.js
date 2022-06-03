import { MESSAGES, DEFAULT_LOCALE } from './locales';

const getUserLang = () => document.documentElement.lang || navigator.language;
const formatLang = (lang) => lang.substr(0, 2).toLowerCase();
const checkExistingLocales = (locale) => locale in MESSAGES;

const getLang = () => {
  const language = getUserLang();
  const formattedLang = formatLang(language);

  if (checkExistingLocales(formattedLang)) {
    return formattedLang;
  }

  return DEFAULT_LOCALE;
};

const i18n = (key) => {
  const lang = getLang();

  return MESSAGES[lang][key] ?? MESSAGES[DEFAULT_LOCALE][key] ?? key;
};

export default i18n;
