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

