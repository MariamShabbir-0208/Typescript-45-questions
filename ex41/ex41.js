// Array of magician's names
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller", "Criss Angel"];
// Function to print each magician's name
function show_magicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
// Call the function with the magicians array
show_magicians(magicians);
