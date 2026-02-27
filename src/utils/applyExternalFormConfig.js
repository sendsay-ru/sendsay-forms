const getExternalFormConfig = (formId) => {
  if (!window.SENDSAY_FORM_FIELDS || !formId) {
    return;
  }

  return window.SENDSAY_FORM_FIELDS[formId];
};

const createInputSelector = (fieldName) => `input[name="${fieldName}"]`;

const hideFieldInput = (input) => {
  const element = input;

  if (element) {
    element.style.display = 'none';
  }
};

const hideFieldLabel = (input) => {
  if (!input) {
    return;
  }

  const label = input.parentElement?.querySelector('label');

  if (label) {
    label.style.display = 'none';
  }
};

export const applyExternalFormConfig = ({ element, formId }) => {
  const formConfig = getExternalFormConfig(formId);

  if (!formConfig) {
    return;
  }

  Object.keys(formConfig).forEach((fieldName) => {
    const fieldConfig = formConfig[fieldName];
    const input = element?.querySelector(createInputSelector(fieldName));

    if (!input) {
      return;
    }

    if (fieldConfig.defaultValue !== undefined) {
      input.value = fieldConfig.defaultValue;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (fieldConfig.hideInput) {
      hideFieldInput(input);
    }

    if (fieldConfig.hideLabel) {
      hideFieldLabel(input);
    }
  });
};
