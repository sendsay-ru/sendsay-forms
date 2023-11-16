import {
  DEFAULT_ACCOUNT_ID,
  DEFAULT_IS_PRODUCTION_VALUE,
  DEFAULT_FORM_ID,
  SENDSAY_FORM_EMBEDDED,
  SENDSAY_FORM_SUBSCRIBE
} from './constants';
import { getCookies } from './cookieUtils';

const PRODUCTION = 'https://image.sendsay.ru/app/js/forms/forms.min.js';
const DEPLOY = './forms.min.js';

const getScriptElement = ({
  isProduction = DEFAULT_IS_PRODUCTION_VALUE,
}) => {
  const source = isProduction ? PRODUCTION : DEPLOY;
  const scriptTag = document.createElement('script');

  scriptTag.src = source;

  return scriptTag;
};

const createFormElement = ({
  accountId = DEFAULT_ACCOUNT_ID,
  formId = DEFAULT_FORM_ID
}, dataAttr) => {
  const formElement = document.createElement('div');

  formElement.dataset[dataAttr] = `${accountId}/${formId}`;

  return formElement;
};

const createSubscibeElement = (cookies, dataAttr) => {
  const formElement = createFormElement(cookies, dataAttr);

  formElement.className = 'flex p-2 rounded bg-blue-600 text-white cursor-pointer m-3 w-40 justify-center';
  formElement.innerText = 'Open modal dialog';

  return formElement;
};

const main = () => {
  const cookies = getCookies();
  const scriptTemplate = getScriptElement(cookies);
  const subscribeElement = createSubscibeElement(cookies, SENDSAY_FORM_SUBSCRIBE);
  const embeddedElement = createFormElement(cookies, SENDSAY_FORM_EMBEDDED);

  const wrapper = document.querySelector('.wrapper');

  document.body.appendChild(scriptTemplate);
  wrapper.appendChild(subscribeElement);
  wrapper.appendChild(embeddedElement);
};

if (document.readyState === 'complete') {
  main();
} else {
  window.addEventListener('load', main);
}
