/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
 message that reads
 I love TypeScript. Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message.*/
function makeshirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love Typescript.'; }
    console.log("you have order a ".concat(size, ", shirt that says ").concat(text));
}
makeshirt('largr');
makeshirt('medium');
//different message
makeshirt('small', 'I need a big shirt to wear');
