import { toNumber } from './toNumber';

const leaveCounterKey = formId => `sendsay-form-${formId}`;

export const LeaveCounter = {
  get: formId => (
    localStorage[leaveCounterKey(formId)]
  ),

  increment: (formId) => {
    localStorage[leaveCounterKey(formId)] = Math.min(toNumber(localStorage[leaveCounterKey(formId)]) + 1 || 1, 2);
  },

  decrement: (formId) => {
    localStorage[leaveCounterKey(formId)] = Math.max(toNumber(localStorage[leaveCounterKey(formId)]) - 1 || 0, 0);
  },
};
