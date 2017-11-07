
//Object Destructuring

// const person = {
//   name: 'Brian',
//   age: '45',
//   location: {
//     city: 'ST.pete',
//     temp: 80
//   }
// }

// const {name: firstname = 'Anonymous', age} = person 

// console.log(`${firstname} is ${age} years old.`)

// const {city, temp: temperature} = person.location

// if (city && temperature) {
//   console.log(`Its ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Publisher' } = book.publisher

// console.log(publisherName)

// Array Destructuring

const address = ['1293 80th ave n', 'ST.Pete', 'Florida', '33702']

const [, city, state = 'New York'] = address

console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']