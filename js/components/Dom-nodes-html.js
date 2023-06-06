class RandomForm extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
      <section class="random-joke joke__container">
        <div class="random-joke__text">
          <p>There's no joke!</p>
        </div>

        <button class="random-joke__btn buttons">Get Joke</button>
      </section>
    `;
  }
}
customElements.define('app-random-form', RandomForm)

class Cart extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
    <div class="cart--bgk" id="cart-active" style="display: none;">
      <aside class="cart__dashboard">
        <h2>Cart</h2>
        <ul class="cart__list" id="cart-list"></ul>
        <button id="clear-cart" class="buttons">Remove All</button>
      </aside>
    </div>
    `;
  }
}
customElements.define('app-cart', Cart)