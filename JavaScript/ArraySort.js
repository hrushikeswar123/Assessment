let input = prompt("Enter a list of items separated by commas:");

let originalArray =input.split(",");
let sortedArray = originalArray.slice().sort((a, b) => b - a);

console.log(originalArray);
console.log(sortedArray); 