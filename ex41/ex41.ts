/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array. */
 
// Array of magician's names
const magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller", "Criss Angel"];

// Function to print each magician's name
function show_magicians(names: string[]): void {
    for (let name of names) {
        console.log(name);
    }
}

// Call the function with the magicians array
show_magicians(magicians);
