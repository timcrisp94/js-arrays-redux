console.log('hi')

// Our array with items
const colors = ['red', 'green', 'blue'];

// Using length property
const lengthWay = colors[colors.length-2];
console.log(lengthWay); // Logs: 'green'

// Using slice() method. Note an array is returned
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // Logs: 'green'

// Using at() method
const atWay = colors.at(-2);
console.log(atWay); // Logs: 'green'

const nums = [1, 2, 3]

console.log(nums.at(-1))

console.log(nums.at(0))

// console.log(squared)

// let sqd = []

// for (let i = 0; i < nums.length; i ++) {
//   sqd.push(nums[i] * nums[i])  
// }
// let sq = []

// for (let i = 0; nums.length; i++) {
//   sq.push(nums.at(i) * nums.at(i))
// }

// console.log(sq)