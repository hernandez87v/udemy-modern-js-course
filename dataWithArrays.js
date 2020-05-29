let shoppingList = ['eggs', 'cheese', 'bread', 'milk', 'ketchup'];

shoppingList[1] = 'burgers'; // replaces item in index 1
shoppingList[2] = 'hamburger buns'; // replaces item in index 2

shoppingList[shoppingList.length] = 'cereal'; //adds item to then end of array
shoppingList[shoppingList.length] = 'hot sauce';

console.log(shoppingList);
