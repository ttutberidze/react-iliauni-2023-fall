// string
// number
// bigint
// boolean
// symbol
// null
// undefined

// object

// var, let, const


// a = 10;
// var a;

// console.log(a);

// console.log('10' === 10)

// const a = Symbol('123')
// let b = Symbol('123')
// b = a;
// console.log(a === b)


// console.log(typeof null)

// const a = 10;
// let b  = a;
// b = 20;
// console.log(a);

// const user = {
//     name: 'James Bond',
//     age: 30
// }

// const user2 = user;

// user2.name = '007';
// console.log(user.name);

// const user = {
//     name: 'James Bond',
//     age: 30,
//     address: {
//         city: 'Tbilisi'
//     }
// }

// const user2 = {
//     ...user,
//     address: {
//         ...user.address
//     }
// }

// user2.address.city = 'Batumi';
// console.log(user);

// const fruits = ['Hello', 2, null, user, [1, 2]];
// const fruits2 = [...fruits];
// fruits2[4][1] = 5
// console.log(fruits[4])

// const user2 = {
//     ...fruits
// }


// function diff(a, b) {
//     return a - b;
// }

// const sum = function(a, b) {
//     return a + b;
// }

// const sum2 = (a, b) => {
//     return a + b;
// }

// const user = {
//     name: 'James Bond',
//     sayHello: () => {
//         console.log(this);
//         return 'Hello, ' + this.name;
//     }
// }

// const sayHello = name => `Hello, ${name}`

// console.log(sayHello('James Bond'));

// const user = {
//     name: 'James Bond',
//     age: 30,
//     address: {
//         city: 'Tbilisi'
//     }
// }

// const name = user.name;
// const address = user.address;

// const {name, address: {city: myCity}} = user;

// console.log(name, myCity);

// const fruits = ['Hello', 2, null, [1, 2]];
// const [, , , [, second]] = fruits;
// console.log(second)

// const print = ({name, ...rest}) => {
//     console.log(rest);
//     return `Hello, ${name}`
// }

// console.log(print2(fruits));

// const deepCopy = (obj) => {
//     const keys = Object.keys(obj)
// }

// const fruits = ['Hello', 2, null, [1, 2]];

// for(let fruit of fruits) {
//     console.log(fruit);
// }

// const user = {
//     name: 'James Bond',
//     age: 30,
//     address: {
//         city: 'Tbilisi'
//     }
// }

// for(let field in user) {
//     console.log(user[field])
// }