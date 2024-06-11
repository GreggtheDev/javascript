// Create an array called shoppingList with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

// Add 'fruit loops' to the list
shoppingList.push('fruit loops');

// Update 'coffee' to 'fair trade coffee'
let index = shoppingList.indexOf('coffee');
if (index !== -1) {
  shoppingList[index] = 'fair trade coffee';
}

// Replace 'chips' and 'salsa' with 'rice' and 'beans'
let chipsIndex = shoppingList.indexOf('chips');
if (chipsIndex !== -1) {
  shoppingList[chipsIndex] = 'rice';
}

let salsaIndex = shoppingList.indexOf('salsa');
if (salsaIndex !== -1) {
  shoppingList[salsaIndex] = 'beans';
}

// Create an empty array to represent your shopping cart called shoppingCart.
let shoppingCart = [];

// Remove the last item from your shopping list and add it to your cart
let lastItem = shoppingList.pop();
shoppingCart.push(lastItem);

// Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.
while (shoppingList.length > 0) {
  let nextItem = shoppingList.shift();
  shoppingCart.push(nextItem);
}

// Sort the items in the shopping cart in reverse alphabetical order
shoppingCart.sort().reverse();

// Print the shopping cart as a comma-separated string
console.log(shoppingCart.join(', '));
