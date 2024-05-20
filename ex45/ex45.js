/*Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments.
 Call the function with the required information and two other name-value pairs,
 such as a color or an optional feature.
 Print the Object that’s returned to make sure all the information was stored correctly. */
// Function to store information about a car in an object
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional properties to the car object
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Call the function with required and additional information
var car1 = create_car("Toyota", "Camry", ["color", "blue"], ["year", 2021], ["features", ["sunroof", "GPS"]]);
var car2 = create_car("Tesla", "Model S", ["color", "red"], ["autopilot", true]);
// Print the objects to verify the information
console.log(car1);
console.log(car2);
