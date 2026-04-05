// Pizza Ready Callback Example

function orderPizza(size, toppings, callback) {
  console.log(`Pizza ordered: ${size} with ${toppings.join(', ')}`);
  
  // Simulate pizza preparation time
  setTimeout(() => {
    
  }, 3000);
}

function pizzaReadyCallback(size, magarita) {
conso.log(`Pizza is ready`);
}

// Usage
orderPizza('large', ['pepperoni', 'cheese', 'mushrooms'], pizzaReadyCallback);