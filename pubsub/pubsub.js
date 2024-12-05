/**
 * @author : Ujjal Sannyal
 * @description : Pubsub class defination
 */
export default class PubSub {
  constructor() {
    this.subscribers = [];
  }

  /**
   *
   * @param {*} subscriber : callback function
   * @returns Object : it contains unsubscribe method
   */
  subscribe(subscriber) {
    if (typeof subscriber !== "function") {
      throw new Error(
        `${typeof subscriber} is not a valid argument for subscriber methid, expexted a function with one argument`
      );
    }
    this.subscribers = [...this.subscribers, subscriber];

    return {
      unsubscribe: this.#unsubscribe(subscriber),
    };
  }
  /**
   *
   * @param {*} subscriber : same callback function which was used for subscription
   * @returns a closur function
   */
  #unsubscribe(subscriber) {
    return () => {
      this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
    };
  }
  /**
   * @description removing all subcribe methode
   */
  unsubscribeAll() {
    this.subscribers.length = 0;
  }
  /**
   * 
   * @param {*} payload : as per user choice
   */
  publish(payload) {
    this.subscribers.forEach((sub) => sub(payload));
  }
}
