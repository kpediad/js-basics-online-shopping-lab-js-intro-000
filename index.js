var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push(Object.assign({}, {itemName: item}, {itemPrice: Math.floor(Math.random() * 100)}))
 return item + " has been added to your cart."
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var cartContents = "In your cart, you have "
  for(let i = 0; i < cart.length; i++) {
    if (i === cart.length - 1) {
      cartContents += `and ${cart[i]['itemName']} at \$${cart[i]['itemPrice']}.`
    } else {
      cartContents += `${cart[i]['itemName']} at \$${cart[i]['itemPrice']}, `
    }
  }
  return cartContents
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
