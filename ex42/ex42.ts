/*Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to
 each magician’s name. Call show_magicians() to see that the list has actually been modified.
 */
// Array of magician's names
const magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller", "Criss Angel"];

// Function to print each magician's name
function show_magicians(names: string[]): void {
    for (let name of names) {
        console.log(name);
    }
}

// Function to add "the Great" to each magician's name
function make_great(names: string[]): void {
    for (let i = 0; i < names.length; i++) {
        names[i] = "The Great " + names[i];
    }
}

// Modify the magicians array
make_great(magicians);

// Print the modified magicians array
show_magicians(magicians);
