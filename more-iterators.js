console.log('hi')

const friends = ["Melissa", "Marc", "Andrew", "Nick"]

friends.forEach(function(friend) {
  console.log(`I have a friend named ${friend}`)
})

friends.forEach(function(friend) {
  console.log('I have a friend named ' + friend)
})

let myFriend = []

for (i = 0; i < friends.length; i++) {
  myFriend.push(friends[i])
}

