console.log('arrays party redux')

console.log(
  typeof ['arrays', 'are', 'objects']
)

let students = ['Fabian', 'Rohan', 'Garam', 'Tim', 'Jae', 'Erin']

console.log(students)

// statically retrieve an element from an array
console.log(students[5])
console.log(students[1][0])

console.log(students.length)

// add an element to the end of an array 
// .push()

students.push('dave')

console.log(students)

// .pop() - removes the last item

let studentThatGotPopped = students.pop()

console.log(students)
console.log(studentThatGotPopped)

// .shift() - remove the first item

students.shift()
console.log(students)

// .unshift() - adds to the front of the array

students.unshift('Joseph')
console.log(students)

// .splice() - remove more than one element
  // first argument = where do you want to start? (index)
  // second argument = how many do you want to delete?

// students.splice(1, 2)
// console.log(students)


// .splice() - you can also add more than one element
  // first - start? (index)
  // second - how many do you want to delete? 
  // third - the item to add

students.splice(2, 0, 'Edwin')
console.log(students)


let albums = ['innervisions', 'bitches brew', 'giant steps', 'the shape of jazz to come', 'let it be']

let albumsCopy = [...albums]

console.log(albums)
console.log(albumsCopy)

// .join() - takes all the elements of the array and joins them with your argument
// converts the whole array into a string

let joinedStudents = students.join(' and ')
console.log(joinedStudents)