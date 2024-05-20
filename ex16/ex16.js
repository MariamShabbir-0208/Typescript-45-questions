/*
More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program
informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
 */
var guestARR = ["Mariam", "Qurat", "Rubab", "Amber"];
var canNotAttend = "Mariam";
var newGuest = "Shabbir";
guestARR[guestARR.indexOf(canNotAttend)] = newGuest;
console.log(guestARR);
//guestARR.map((items) =>
//console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`)
//);
//part 2 Began
var guestBeg = "Faiza";
guestARR.unshift(guestBeg);
//console.log(guestARR)
//part 3 Middel
var middleGuest = "Saira";
var middleIndex = guestARR.length / 4;
guestARR.splice(middleIndex, 4, middleGuest);
//console.log(guestARR)
//part 4 append
guestARR.push("Mubshir");
//console.log(guestARR)
//part 5 
guestARR.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited in the more people list on dinner"));
});
