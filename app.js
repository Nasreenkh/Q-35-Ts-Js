// List of animals with a common characteristic
var animals = ['Dog', 'Cat', 'Rabbit'];
// Loop through the array to print each animal name and a corresponding statement
for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
// Statement about what these animals have in common
console.log("Any of these animals would make a great pet!");
