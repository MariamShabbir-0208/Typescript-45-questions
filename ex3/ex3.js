/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
 and titlecase.
 */
var personalName = "mariam Shabbir";
//in lowercase
console.log("lowercase:", personalName.toLowerCase());
//in uppercase
console.log("upercase:", personalName.toUpperCase());
//in titlecase
console.log("titlecase:", personalName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
