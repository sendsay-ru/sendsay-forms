const getExternalFormConfig = (formId) => {
  if (!window.SENDSAY_FORMS || !formId) {
    return;
  }

  return window.SENDSAY_FORMS[formId];
};

const createInputSelector = (fieldName) => `input[name="${fieldName}"]`;

const hideFieldInput = (fieldName, element) => {
  const input = element?.querySelector(createInputSelector(fieldName));
  if (input) {
    input.style.display = 'none';
  }
};

const hideFieldLabel = (fieldName, element) => {
  const input = element?.querySelector(createInputSelector(fieldName));

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

  if (formConfig.email) {
    const emailConfig = formConfig.email;

    if (emailConfig.defaultValue !== undefined) {
      const emailInputName = '_member_email';
      const emailInput = element?.querySelector(createInputSelector(emailInputName));

      if (emailInput) {
        emailInput.value = emailConfig.defaultValue;

        emailInput.dispatchEvent(new Event('input', { bubbles: true }));
      }

      if (emailConfig.hideInput) {
        hideFieldInput(emailInputName, element);
      }

      if (emailConfig.hideLabel) {
        hideFieldLabel(emailInputName, element);
      }
    }
  }
};

export const getExternalFormData = (formId) => {
  const formConfig = getExternalFormConfig(formId);

  if (!formConfig) {
    return;
  }

  return { ...formConfig.extraData };
};
