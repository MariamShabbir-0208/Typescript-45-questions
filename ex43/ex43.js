/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
the array of magicians’ names. Because the original array will be unchanged, return the new array and store
it in a separate array. Call show_magicians() with each array to show that you have one arrayof the original
 names and one array with the Great added to each magician’s name. */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of magician's names
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller", "Criss Angel"];
// Function to print each magician's name
function show_magicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
// Function to add "the Great" to each magician's name and return a new array
function make_great(names) {
    var greatMagicians = names.map(function (name) { return "The Great " + name; });
    return greatMagicians;
}
// Make a copy of the magicians array and modify the copy
var greatMagicians = make_great(__spreadArray([], magicians, true));
// Print the original magicians array
console.log("Original magicians:");
show_magicians(magicians);
// Print the modified magicians array
console.log("n/Great magicians:");
show_magicians(greatMagicians);
