// Imperative vs. Declarative Programming

// Imperative Programming how to do; step-by-step

// for loops, for example

let arr = [0, 1, 2]

for (let index =0; index < arr.length; index++) {
  console.log(index, 'thanks imperative programming')
}

// Declarative - what to do

const pets = [
  {name: 'Hadley', species: 'dog'},
  {name: 'Lily', species: 'dog'},
  {name: 'Chloe', species: 'dog'},
  {name: 'Basket', species: 'cat'},
  {name: 'Steve', species: 'fish'},
  {name: 'Herbie', species: 'bird'}

]

// filter out all the dogs

// let dogs = []
// for (let i of pets) {
//   if (pets[i].species === 'dog') {
//     dogs.push(pets[i])
//   }
// }


// for (let i = 0; i < pets.length; i++) {
  // console.log(pets[i]['species'])
//   // console.log(pets[i].species)
//   if(pets[i].species === 'dog') {
//     dogs.push(pets[i])
//   }
// } 

// console.log(dogs)

// filter method
// 1. creates a new array for us
// 2. returns the filtered items only
// 3. the callback fn returns a boolean value to the filter method

// there are 2 different problems going on here
  // putting them in a separate array
  // while iterating

// let filteredDogs = pets.filter(function(pet) {
//   return pet.species === 'dog'
// })

// console.log(filteredDogs)

// Second task is to print out all the names

let names = []

for (let i = 0; i < pets.length; i++) {
  console.log(i)
  console.log(pets[i].name)
  names.push(pets[i].name)
  
}

console.log(names.join(' and '))

for (let idx = 0; idx < pets.length; idx++) {
  names.push(pets[idx].name)
  
}

// dot map
// TRANSFORMS THE ARRAY
// returns a new transformed array
// returns the same amount of elements

let mappedNames = pets.map(function(pet) {
  return pet.name
})

console.log(mappedNames)