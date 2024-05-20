/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a
message that should be
printed on the shirt. The function should print a sentence summarizing the size of the shirt
and the message printed
on it. Call the function.*/
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size, " and the message on it is: \"").concat(message, "\""));
}
// Calling the function
make_shirt('L', "Learn AI: Your gateway to tomorrow's technology.");
make_shirt('M', "Unlock the future with the power of AI.");
make_shirt('S', "Learn from yesterday, live for today, hope for tomorrow.");
