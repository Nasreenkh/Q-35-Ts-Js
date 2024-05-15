// List of animals with a common characteristic
const animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Loop through the array to print each animal name and a corresponding statement
for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Statement about what these animals have in common
console.log("Any of these animals would make a great pet!");