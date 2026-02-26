export const getExternalFormConfig = (formId) => {
  if (!window.SENDSAY_FORMS || !formId) {
    return;
  }

  return window.SENDSAY_FORMS[formId];
};

export const applyExternalFormConfig = ({ element, formId }) => {
  const formConfig = getExternalFormConfig(formId);

  if (!formConfig) {
    return;
  }

  if (formConfig.email) {
    const emailConfig = formConfig.email;

    // Set default value for email field
    if (emailConfig.defaultValue !== undefined) {
      const emailInputName = '_member_email';
      const emailInput = element?.querySelector(`input[name="${emailInputName}"]`);

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

const hideFieldInput = (fieldName, element) => {
  const input = element.querySelector(`input[name="${fieldName}"]`);
  if (input) {
    input.style.display = 'none';
  }
};

const hideFieldLabel = (fieldName, element) => {
  const input = element?.querySelector(`input[name="${fieldName}"]`);

  if (!input) {
    return;
  }

  const label = input.parentElement?.querySelector('label');

  if (label) {
    label.style.display = 'none';
  }
};
