class EventManager {
  constructor(eventName) {
    this.event = eventName;
  }

  /**
   * This method only accepts functions as parameters.
   * 
   * @param {subscribe} function
   */
  subscribe(subscriber) {
    document.addEventListener(this.event, subscriber);
  }

  /**
   * This method accepts any data.
   * 
   * @param {fireEvent} any 
   */
  fireEvent(data) {
    document.dispatchEvent(new CustomEvent(this.event, { detail: data }))
  }
}
export default EventManager;