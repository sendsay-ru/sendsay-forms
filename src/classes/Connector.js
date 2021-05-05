export class Connector {
  constructor(url) {
    this.url = url;
    const { id, formId } = this.extractID(this.url);
    this.id = id;
    this.formId = formId;
  }

  extractID(url) {
    let login = '';
    let formId = '';
    let id = '';
    const res = url.match(/[^/s\/]*\/[^/s\/]*\/?$/);
    if (res) {
      const parts = res[0].split('/');
      [login, formId] = parts;
      id = `${login}-${formId}`;
    }
    return {
      login,
      formId,
      id,
    };
  }

  promiseHandler(resolve, reject) {
    const self = this;
    this.request.onreadystatechange = () => {
      if (self.request.readyState === 4) {
        self.pending = false;
        let success = true;
        if (self.request.onReady) { success = self.request.onReady.apply(self); }
        if (self.request.status === 200 && success) {
          resolve(self.data);
        } else {
          reject(false);
        }
      }
    };
    this.pending = true;
    this.request.send(this.params);
  }

  load() {
    if (this.pending) { return; }
    this.request = new XMLHttpRequest();
    this.request.open('GET', this.url, true);
    this.request.setRequestHeader('Accept', 'application/json');
    // eslint-disable-next-line compat/compat
    return new Promise(this.promiseHandler.bind(this)).then(
      this.handleLoadSuccess.bind(this),
      this.handleLoadFail.bind(this),
    );
  }

  transformAnswer(json) {
    if (json.obj && json.obj.settings) {
      this.data = json.obj.settings;
      this.data.id = this.id;
      if (json.obj.state && +json.obj.state === 1) { this.data.active = true; }
    }
  }

  submit(params) {
    if (this.pending) { return; }
    this.request = new XMLHttpRequest();
    this.request.open('POST', this.url, true);
    this.request.setRequestHeader('Content-Type', 'application/json');
    this.request.setRequestHeader('Accept', 'application/json');
    this.request.onReady = this.handleSubmitResult;

    this.params = JSON.stringify(params);

    // eslint-disable-next-line compat/compat
    return new Promise(this.promiseHandler.bind(this));
  }

  handleSubmitResult() {
    const el = document.createElement('div');
    let json;
    el.innerHTML = this.request.responseText;
    try {
      json = JSON.parse(this.request.responseText);
    } catch (e) {
      console.log(e);
      return false;
    }
    this.error = json.errors;
    if (json.errors) { return false; }

    return true;
  }

  handleLoadSuccess() {
    const rawJson = this.request.responseText;
    const json = JSON.parse(rawJson);

    if (!json.errors) {
      this.transformAnswer(json);
    } else {
      this.errors = json.errors;
    }
  }

  handleLoadFail() {}
}
