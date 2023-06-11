import { ShoppingCart } from "./Cart.js";
const cartBtn = document.getElementById('cart-btn');
cartBtn.style.right = '.9375rem'
const cartActive = document.getElementById('cart-active');

function toggleDashboard() {
  if (cartActive.style.display === 'none') {
    cartActive.style.display = 'block';
  } else {
    cartActive.style.display = 'none';
  }

  const body = document.body;
  if (body.classList.contains('no-scroll')) {
    body.classList.remove('no-scroll');
    cartBtn.style.right = '.9375rem'
  } else {
    body.classList.add('no-scroll');
    cartBtn.style.right = '2rem'
  }

  ShoppingCart.printProducts()
}

function initDashboard() {
  cartBtn.addEventListener('click', toggleDashboard);
}

export default initDashboard