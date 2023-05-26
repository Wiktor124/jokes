export class RandomForm extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
      <section class="random-joke joke__container">
        <div class="random-joke__text"></div>

        <button class="random-joke__btn">Get Joke</button>
      </section>
    `;
  }
}
customElements.define('app-random-form', RandomForm)