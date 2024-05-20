/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests. 
 Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array.
• Test whether an item is not in a array.*/


// Tests for equality and inequality with strings
let country1: string = "Pakistan";
let country2: string = "India";
console.log(country1 === "Pakistan"); // True
console.log(country2 !== "Pakistan"); // True
console.log(country1 === "India"); // False
console.log(country2 !== "India"); // False

// Tests using the lower case function
let fruit1: string = "Apple";
let fruit2: string = "banana";
console.log(fruit1.toLowerCase() === "apple"); // True
console.log(fruit2.toLowerCase() === "Banana".toLowerCase()); // True
console.log(fruit1.toLowerCase() === "apple".toLowerCase()); // True
console.log(fruit2.toLowerCase() !== "banana".toLowerCase()); // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 20;
console.log(num1 === 10); // True
console.log(num2 !== 10); // True
console.log(num1 > 5); // True
console.log(num2 < 25); // True
console.log(num1 >= 10); // True
console.log(num2 <= 15); // False

// Tests using "and" and "or" operators
let age: number = 25;
let hasLicense: boolean = true;
console.log(age > 18 && hasLicense); // True
console.log(age < 18 && hasLicense); // False
console.log(age > 18 || hasLicense); // True
console.log(age < 18 || hasLicense); // True

//Test whether an item is in an array
let countries: string[] = ["Pakistan", "India", "Japan", "China"];
console.log(countries.indexOf("Pakistan")); // True
console.log(countries.indexOf("Brazil")); // False

// Test whether an item is not in an array
let fruits: string[] = ["apple", "banana", "cherry"];
console.log(!fruits.indexOf("grape")); // True
console.log(!fruits.indexOf("banana")); // False
