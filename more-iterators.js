console.log('hi')

const friends = ["Melissa", "Marc", "Andrew", "Nick"]

// friends.forEach(function(friend) {
//   console.log(`I have a friend named ${friend}`)
// })

// friends.forEach(function(friend) {
//   console.log('I have a friend named ' + friend)
// })

// friends.forEach(function(friend) {
//   console.log(`I have a friend named ${friend}`)
// })

// friends.forEach(function(friend) {
//   console.log(`I have a friend named ${friend}`)
// })

// let friendNamed = []

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i])
//   friendNamed.push('I have a friend named ' + friends[i])
// }

// console.log(friendNamed)

// friends.forEach(function(friend) {
//   console.log(friend.toLowerCase())
// })

// friends.forEach(function(friend) {
//   console.log(friend.toLowerCase())
// })

// friends.forEach(function(friend) {
//   console.log(friend.toLowerCase())
// })

// friends.forEach(function(friend) {
//   console.log(friend.toUpperCase())
// })

// const nums = [1, 2, 3]
// const squared = nums.map(function(num) {
//   return num * num
// })

// console.log(squared)

// let sqd = []

// for (let i = 0; i < nums.length; i ++) {
//   sqd.push(nums[i] * nums[i])  
// }

// console.log(sqd)

// const s =  nums.map(function(num) {
//   return num * num
// })

// console.log(s)

// const sq = nums.map(function(num) {
//   return num * num
// })

// console.log(sq)

// const squ = nums.map(function(num) {
//   return num ** 2
// })

// console.log(squ)

// const squa = nums.map(function(num) {
//   return num * num
// })

// console.log(squa)

// const squar = nums.map(num => num * num)

// console.log(squa)

// const square = nums.map(num => num ** 2)

// console.log(square)

// const people = [
//   {name: 'Fred', town: 'Bedrock'},
//   {name: 'Susan', town: 'Miami'},
//   {name: 'John', town: 'Arcadia'}
// ]

// const els = people.map(function(person, idx) {
//   const el = document.createElement('div')
//   el.innerHTML = `${person.name} <span>(${person.town})</span>`
//   return el
// });

// console.log(els)

// const e = people.map(function(person, i) {
//   const el = document.createElement('div')
//   el.innerHTML = `${person.name} <span> (${person.town})</span>`
//   return el
// })

// console.log(e)

// const ell = people.map(function(person, i) {
//   const el = document.createElement('div')
//   el.innerHTML = `${person.name} <span> (${person.town})</span>`
//   return el
// })

// console.log(ell)

// const numbers = [25, 6, 100, 3]
// let summ = numbers.reduce(function(prev, num) {
//   return prev + num
// }, 0)

// console.log(summ)

// let some = numbers.reduce(function(prev, num) {
//   return prev + num
// }, 0)

// let shum = 0
// for (let i = 0; i < numbers.length; i++) {
//   shum += numbers[i] 
// }

// console.log(shum)

// let som = numbers.reduce((prev, num) => prev + num)
// console.log(som)

// let somesome = numbers.reduce(function(prev, num) {
//   return prev + num
// }, 0)

const votes = ['Yes', 'No', 'No', 'Yes', 'Yes']
let tally = votes.reduce(function(prev, vote) {
  prev[vote] = prev[vote] ? prev[vote] + 1 : 1
  return prev
}, {})


let tallie = votes.reduce(function(prev, vote) {
  prev[vote] = prev[vote] ? prev[vote] + 1 : 1
  return prev
}, {})

console.log(tallie)

let tallyVotes = votes.reduce(function(prev, vote) {
  prev[vote] = prev[vote] ? prev[vote] + 1 : 1
  return prev
}, {})

console.log(tallyVotes)

let voteTally = votes.reduce((prev, vote) => {
  prev[vote] = prev[vote] ? prev[vote] + 1 : 1
  return prev
}, {})

let tallieVo = votes.reduce(function(prev, vote) {
  prev[vote] = prev[vote] ? prev[vote] + 1 : 1
  return prev
}, {})

const nums = [100, 2, 5, 42, 99]
const odds = nums.filter(function(num) {
  return num % 2
});

console.log(odds)

const ods = nums.filter(function(num) {
  return num % 2
}) 

console.log(ods)

const notEvens = nums.filter(function(num) {
  return num % 2
})

console.log(notEvens)

const nevens = nums.filter(function(num) {
  return num % 2
})

console.log(nevens)

const oudds = nums.filter(num => num % 2)

console.log(oudds)

const people = ['jerks', 'nice', 'jerks', 'nice', 'nice']

const nice = people.filter(function(people) {
  return people === 'nice'
})

console.log(nice)

/*--- using an arrow function for the callback ---*/
// const odds = nums.filter(num => num % 2)

const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
]

let firstWhiteCar = cars.find(function(car) {
  return car.color === 'white'
});

let frstWhiteCar = cars.find(function(car) {
  return car.color === 'white'
})

let bmw = cars.find(car => car.make === 'BMW')
console.log(bmw)

let toyota = cars.find(function(car) {
  return car.make === 'Toyota'
})

console.log(toyota)

let missingCar = cars.find(function(car) {
  return car.color === 'black'
});
// missingCar = undefined

// /*--- using an arrow function for the callback ---*/
// let firstWhiteCar = cars.find(car => car.color === 'white')