import { ToggleablePopup } from './ToggleablePopup';
import warningIcon from '../../icons/warning';
import { l8n } from '../../l8n';

export class Notification extends ToggleablePopup {
  initialize() {
    super.initialize();
    this.mobileWith = 280;
  }

  build() {
    super.build();
    const popupBody = this.el.querySelector('.sendsay-toggler');
    popupBody.innerHTML = `
      <div class="sendsay-warning">
        <div>
          ${warningIcon}
        </div>
        <div class="sendsay-warning__text">${l8n('notify__form-is-inactive')}</div>
      </div>
    `;
  }

  handleTogglerClick() {
    // don't remove
  }
}
