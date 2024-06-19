import {
  DEFAULT_ACCOUNT_ID,
  DEFAULT_IS_PRODUCTION_VALUE,
  DEFAULT_FORM_ID,
  DEPLOY,
  PRODUCTION,
  SENDSAY_FORM_EMBEDDED,
  SENDSAY_FORM_SUBSCRIBE,
  FORM_TYPE_POPUP,
} from './constants';
import { getCookies } from './cookieUtils';

const getScriptElement = ({ isProduction = DEFAULT_IS_PRODUCTION_VALUE }) => {
  const source = isProduction ? PRODUCTION : DEPLOY;
  const scriptTag = document.createElement('script');

  scriptTag.src = source;
  scriptTag.defer = true;

  scriptTag.onerror = (error) => {
    console.log('!!form error', error);
  };

  return scriptTag;
};

const createFormElement = ({ accountId, formId, dataAttr }) => {
  const formElement = document.createElement('div');

  formElement.dataset[dataAttr] = `${accountId}/${formId}`;

  return formElement;
};

const createSubscibeElement = (accountId, formId) => {
  const formElement = createFormElement({ accountId, formId, dataAttr: SENDSAY_FORM_SUBSCRIBE });

  formElement.className =
    'flex p-2 rounded bg-blue-600 text-white cursor-pointer m-3 w-40 justify-center';
  formElement.innerText = 'Open modal dialog';

  setTimeout(() => {
    window.SENDSAY.activatePopup(`https://sendsay.ru/form/${accountId}/${formId}`);
  }, 100);

  return formElement;
};

const createErrorElement = () => {
  const errorElement = document.createElement('div');

  errorElement.innerHTML = 'This form is not available';
  errorElement.className = 'absolute flex p-4 rounded left-3 top-3 text-xl bg-orange-300 shadow-md';

  return errorElement;
};

const getFormData = (formId) =>
  // eslint-disable-next-line compat/compat
  fetch(`https://sendsay.ru/form/${formId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());

const getFormElement = ({ accountId = DEFAULT_ACCOUNT_ID, formId = DEFAULT_FORM_ID }, wrapper) => {
  getFormData(`${accountId}/${formId}`)
    .then((data) => {
      if (!wrapper) {
        return;
      }

      if (data?.errors) {
        wrapper.appendChild(createErrorElement());

        console.error(data);

        return;
      }

      if (data?.obj?.settings?.type === FORM_TYPE_POPUP) {
        wrapper.appendChild(createSubscibeElement(accountId, formId));
      } else {
        wrapper.appendChild(
          createFormElement({ accountId, formId, dataAttr: SENDSAY_FORM_EMBEDDED })
        );
      }
    })
    .catch((error) => console.log('Error:', error));
};

const main = () => {
  const cookies = getCookies();
  const scriptTemplate = getScriptElement(cookies);

  const wrapper = document.querySelector('.wrapper');

  document.body.appendChild(scriptTemplate);

  getFormElement(cookies, wrapper);
};

if (document.readyState === 'complete') {
  main();
} else {
  window.addEventListener('load', main);
}
