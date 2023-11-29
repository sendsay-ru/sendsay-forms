import { getCookies, setCookie } from './cookieUtils';
import { DEFAULT_FORM_ID, DEFAULT_ACCOUNT_ID, DEFAULT_IS_PRODUCTION_VALUE } from './constants';

const DEFAULT_FORM_VALUES = {
  isProduction: DEFAULT_IS_PRODUCTION_VALUE,
  accountId: DEFAULT_ACCOUNT_ID,
  formId: DEFAULT_FORM_ID,
};

const resetCheckboxCookies = () => {
  setCookie('isProduction', DEFAULT_IS_PRODUCTION_VALUE);
};

const insertFormData = () => {
  const form = document.getElementById('settings');
  const cookies = getCookies();

  if (!form) {
    return;
  }

  (Object.entries(cookies)).forEach(([name, value]) => {
    if (name === 'isProduction') {
      form.elements.isProduction.checked = Boolean(value);

      return;
    }

    if (form.elements[name]) {
      form.elements[name].value = value ?? '';
    }
  });
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  resetCheckboxCookies();

  [...formData].forEach(([name, value]) => {
    const cookieValue = value || DEFAULT_FORM_VALUES[name];

    setCookie(name, cookieValue);
  });

  window.location.href = '/';

  return false;
};

const main = () => {
  const form = document.getElementById('settings');

  if (!form) {
    return;
  }

  insertFormData();
  form.onsubmit = handleFormSubmit;
};

main();
