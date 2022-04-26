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

const nums = [1, 2, 3]
const squared = nums.map(function(num) {
  return num * num
})

console.log(squared)

let sqd = []

for (let i = 0; i < nums.length; i ++) {
  sqd.push(nums[i] * nums[i])  
}

console.log(sqd)

const s =  nums.map(function(num) {
  return num * num
})

console.log(s)

const sq = nums.map(function(num) {
  return num * num
})

console.log(sq)

const squ = nums.map(function(num) {
  return num ** 2
})

console.log(squ)

const squa = nums.map(function(num) {
  return num * num
})

console.log(squa)

const squar = nums.map(num => num * num)

console.log(squa)

const square = nums.map(num => num ** 2)

console.log(square)

const people = [
  {name: 'Fred', town: 'Bedrock'},
  {name: 'Susan', town: 'Miami'},
  {name: 'John', town: 'Arcadia'}
]

const els = people.map(function(person, idx) {
  const el = document.createElement('div')
  el.innerHTML = `${person.name} <span>(${person.town})</span>`
  return el
});

console.log(els)

const e = people.map(function(person, i) {
  const el = document.createElement('div')
  el.innerHTML = `${person.name} <span> (${person.town})</span>`
  return el
})

console.log(e)

const ell = people.map(function(person, i) {
  const el = document.createElement('div')
  el.innerHTML = `${person.name} <span> (${person.town})</span>`
  return el
})

console.log(ell)

const numbers = [25, 6, 100, 3]
let summ = numbers.reduce(function(prev, num) {
  return prev + num
}, 0)

console.log(summ)

let some = numbers.reduce(function(prev, num) {
  return prev + num
}, 0)

let shum = 0
for (let i = 0; i < numbers.length; i++) {
  shum += numbers[i] 
}

console.log(shum)

let som = numbers.reduce((prev, num) => prev + num)
console.log(som)

let somesome = numbers.reduce(function(prev, num) {
  return prev + num
}, 0)

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

