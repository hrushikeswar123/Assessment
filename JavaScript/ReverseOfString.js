function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
var name = prompt("Enter a String: ");
console.log(`Reversed string is : ${reverseString(name)}`)