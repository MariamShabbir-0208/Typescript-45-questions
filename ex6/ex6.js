/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
 so the whitespace around the name is displayed.
Then print the name after striping the white spaces.*/
// Store the name with whitespace characters
var nameWithWhitespace = "\tJohn Doe\n";
// Print the name with whitespace
console.log("Name with whitespace:");
console.log(nameWithWhitespace);
// Strip the whitespace and print the name again
var nameStripped = nameWithWhitespace.trim();
console.log("Name after stripping whitespace:");
console.log(nameStripped);
