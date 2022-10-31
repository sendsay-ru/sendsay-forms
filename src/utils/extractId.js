export const extractId = (url) => {
  const [, login, formId] = url.match(/([^\/]+)\/([^\/]+)\/?$/) ?? [null, '', ''];

  return {
    login,
    formId,
    id: formId ? `${login}-${formId}` : '',
  };
};
