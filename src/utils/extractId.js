export const extractId = (url) => {
  let login = '';
  let formId = '';
  let id = '';
  const res = url.match(/([^\/]+)\/([^\/]+)\/?$/);
  if (res) {
    [, login, formId] = res;
    id = `${login}-${formId}`;
  }
  return {
    login,
    formId,
    id,
  };
};
