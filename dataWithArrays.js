let shoppingList = ['eggs', 'cheese', 'bread', 'milk', 'ketchup'];
let kitchenItems = ['spork', 'knife', 'plates'];

shoppingList[1] = 'burgers'; // replaces item in index 1
shoppingList[2] = 'hamburger buns'; // replaces item in index 2

shoppingList[shoppingList.length] = 'cereal'; //adds item to end of array
shoppingList[shoppingList.length] = 'hot sauce';

shoppingList.push('bagels'); // Also adds item to end of array

shoppingList.unshift('cheese'); // Adds item to beginning of array

console.log('this is Shopping List', shoppingList);
console.log('Length of Shopping List: ', shoppingList.length);

let megaList = shoppingList.concat(kitchenItems); //Joins both arrays together

console.log('This is all shoppping lists together ', megaList);

console.log(
  'Includes checks if item in array >= #:',
  megaList.includes('ketchup', 6)
);

if (megaList.includes('eggs')) {
  console.log('I dont like eggs');
} else {
  console.log('Were good.');
}

console.log(
  'indexOf will show where in array item is:',
  megaList.indexOf('knife')
);

console.log('Reversed array:', megaList.reverse());
// [ 'plates',
//   'knife',
//   'spork',
//   'bagels',
//   'hot sauce',
//   'cereal',
//   'ketchup',
//   'milk',
//   'hamburger buns',
//   'burgers',
//   'eggs',
//   'cheese' ]
console.log('Joining each item in array:', megaList.join('-'));
// plates-knife-spork-bagels-hot sauce-cereal-ketchup-milk-hamburger buns-burgers-eggs-cheese

console.log(
  'Gets items that fall within index arguments:',
  megaList.slice(2, 8)
);
// ['spork', 'bagels', 'hot sauce', 'cereal', 'ketchup', 'milk'];

console.log(megaList.splice(2, 0, 'fish'));
console.log(megaList);
// []
// [
//   ('plates',
//   'knife',
//   'fish',
//   'spork',
//   'bagels',
//   'hot sauce',
//   'cereal',
//   'ketchup',
//   'milk',
//   'hamburger buns',
//   'burgers',
//   'eggs',
//   'cheese')
// ];

const myEggs = ['brown', 'brown']; //Anything inside array can be changed but a new reference to array cannot
myEggs.push('cyan');
myEggs[0] = 'blue';

console.log('CONST can be changed as shown in example:', myEggs);
