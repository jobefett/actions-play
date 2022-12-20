const cart = [];

function addToCart(item) 
{  
  cart.push(item);
  console.log("added item: " + item);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  console.log("removed: ", idx);
}

addToCart("Waterproof Boots");
