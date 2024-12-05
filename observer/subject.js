export default class Subject {
  constructor() {
    this.observers = [];
  }

  /**
   *
   * @param {*} observer : callback function
   */
  subscribe(observer) {
    this.observers = [...this.observers, observer];
  }

  /**
   *
   * @param {*} subscriber : same callback function which was used for subscription
   */
  unsubscribe(observer) {
    this.observers = this.observers.filter((sub) => sub !== observer);
  }

  /**
   *
   * @param {*} data : as per user choice
   */
  notify(data) {
    this.observers.forEach((sub) => sub.log(data));
  }
}
