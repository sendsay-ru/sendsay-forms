import { Notification } from './elements/Notification';

class NotificationService {
  constructor() {
    this.notify = null;
  }

  show = (id) => {
    if (this.domObj?.isShow) {
      return;
    }
    this.domObj = new Notification({
      ...this.options(),
      id,
    });
    this.domObj.activate();
  }

  options = () => ({
    active: true,
    appearance: {
      animation: 'slide',
      backgroundColor: '#fff',
      borderRadius: '20',
      labelFontFamily: '"Open Sans",Helvetica,Arial,sans-serif',
      labelFontSize: '14',
      labelTextColor: '#000',
      overlayEnabled: false,
      paddingBottom: '20',
      paddingLeft: '20',
      paddingRight: '20',
      paddingTop: '20',
      position: 'notify',
      textColor: '#000',
      width: 400,
    },
    settings: {},
    steps: [],
    toggle: {},
    type: 'widget',
  })
}

let instance = null;

const getInstance = () => {
  if (!instance) {
    instance = new NotificationService();
  }
  return instance;
};

export default getInstance();
