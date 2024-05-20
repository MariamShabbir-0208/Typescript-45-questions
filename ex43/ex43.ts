/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of 
the array of magicians’ names. Because the original array will be unchanged, return the new array and store 
it in a separate array. Call show_magicians() with each array to show that you have one arrayof the original
 names and one array with the Great added to each magician’s name. */

 
 
// Array of magician's names
const magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller", "Criss Angel"];

// Function to print each magician's name
function show_magicians(names: string[]): void {
    for (let name of names) {
        console.log(name);
    }
}

// Function to add "the Great" to each magician's name and return a new array
function make_great(names: string[]): string[] {
    const greatMagicians = names.map(name => "The Great " + name);
    return greatMagicians;
}

// Make a copy of the magicians array and modify the copy
const greatMagicians = make_great([...magicians]);

// Print the original magicians array
console.log("Original magicians:");
show_magicians(magicians);

// Print the modified magicians array
console.log("n/Great magicians:");
show_magicians(greatMagicians);
