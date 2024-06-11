// Create an array called shoppingList with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

// Add 'fruit loops' to the list
shoppingList.push('froot loops');

// Update 'coffee' to 'fair trade coffee'
let index = shoppingList.indexOf('coffee');
if (index !== -1) {
  shoppingList[index] = 'fair trade coffee';
}

// eplace 'chips' and 'salsa' with 'rice' and 'beans'
let chipsIndex = shoppingList.indexOf('chips');
if (chipsIndex !== -1) {
  shoppingList[chipsIndex] = 'rice';
}

let salsaIndex = shoppingList.indexOf('salsa');
if (salsaIndex !== -1) {
  shoppingList[salsaIndex] = 'beans';
}

// TODO: Test your shopping functions

// TODO: Call your shopping functions

// TODO: Print the results

// TODO: Add any additional code or notes

// Happy shopping!
