export function getHostName() {
  try {
    // eslint-disable-next-line
    const match = location.hostname.match(
      /(^|\.)[a-zA-Z0-9\-]+\.{0,1}[a-zA-Z0-9\-]*$/,
    );

    if (match) {
      let domain = match[0];

      if (domain[0] !== '.') {
        domain = `.${domain}`;
      }

      return domain;
    }
  } catch (e) {
    // eslint-disable-next-line
    return location.hostname;
  }

  // eslint-disable-next-line
  return location.hostname;
}
