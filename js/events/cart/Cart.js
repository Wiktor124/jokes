export class ShoppingCart {
  static cart = JSON.parse(localStorage.getItem('cart')) || [];

  addProduct(data) {
    const id = crypto.randomUUID()
    const { idColor, img, joke, price, title } = data

    ShoppingCart.cart.push({ id, idColor, img, joke, price, title });
    localStorage.setItem('cart', JSON.stringify(ShoppingCart.cart));
  }

  removeProductById(id) {
    const index = ShoppingCart.cart.findIndex((product) => product.id === id);
    ShoppingCart.cart.splice(index, 1);
    
    localStorage.setItem('cart', JSON.stringify(ShoppingCart.cart));
    ShoppingCart.printProducts();
  }

  removeAllProducts() {
    ShoppingCart.cart = [];
    localStorage.removeItem('cart');
    
    ShoppingCart.printProducts();
  }

  static printProducts() {
    document.querySelector('#cart-list').innerHTML = ShoppingCart.cart.map(({ id, idColor, joke, title, price, img }) => {
      
      return `
        <li>
          <div class="cart__img-product cart__color-text${idColor}">
            <span class="cart__joke">${joke}</span>
            <img src="./images/dad.jpeg" alt="Dad print" class="cart__dad-img" />
            <img src="${img}" />
          </div>

          <div>
            <h2>${title}</h2>
            <h3>${price}</h3>
            <p><strong>Joke:</strong> ${joke}</p>
            <button class="remove" data-id="${id}">Remove</button>
          </div>
        </li>
      `;
    }).join('');
  }
}
