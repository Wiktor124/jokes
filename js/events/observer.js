

class EventManager {
  constructor(eventName) {
    this.event = eventName;
  }

  subscribe(subscriber) {
    document.addEventListener(this.event, subscriber);
  }

  fireEvent(data) {
    document.dispatchEvent(new CustomEvent(this.event, { detail: data }))
  }
}

/**
 * Subscirbe your functions here to change print joke in products
 * 
 * 
 * @param {ChangeProductJoke} event
 */

export class ChangeProductJoke extends EventManager {
  constructor(eventName) {
    super(eventName)
  }
}


/**
 * Subscribe your functions here to change products or color
 * 
 * 
 * @param {ChangeProduct} event
 */

export class ChangeProduct extends EventManager {
  constructor(eventName) {
    super(eventName)
  }
}
