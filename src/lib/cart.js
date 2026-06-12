// src/lib/cart.js

const STORAGE_KEY = 'tecil-cart';

export function getCart() {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    ) || [];
  } catch {
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(cart)
  );

  window.dispatchEvent(
    new CustomEvent('cart-updated', {
      detail: cart
    })
  );
}

export function addToCart(product) {

  const cart = getCart();

  const existing =
    cart.find(
      item => item.id === product.id
    );

  if (existing) {
    existing.qty += 1;
  } else {

    cart.push({
      ...product,
      qty: 1
    });

  }

  saveCart(cart);
}

export function removeFromCart(id) {

  saveCart(
    getCart().filter(
      item => item.id !== id
    )
  );

}

export function updateQty(id, qty) {

  const cart = getCart();

  const item =
    cart.find(
      p => p.id === id
    );

  if (!item) return;

  item.qty = qty;

  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart(cart);
}

export function clearCart() {
  saveCart([]);
}

export function getCartCount() {

  return getCart().reduce(
    (sum, item) =>
      sum + item.qty,
    0
  );

}