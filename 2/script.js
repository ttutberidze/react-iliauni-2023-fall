// const user = {
//     name: 'James Bond',
//     address: {
//         city: 'Tbilisi'
//     }
// }


// const user2 = {
//     ...user,
//     address: {
//         ...user.address
//     },
// }
// user2.address.city = 'Batumi'


// console.log(user.address.city);

// a = 5
// console.log(a)
// var a;

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(5, 4))

// const sum3 = function(a, b) {
//     return a + b;
// }

// const sum2 = () => {
//     return a + b
// }

// const user = {
//     name: 'James Bond',
//     sayHello: function() {
//         return this.name;
//     }
// }

// const sayHello = name => `Hello: ${name}`

// const func = (a) => {
//     if(a > 5) {
//         var b = 10;
//     }
//     console.log(b);
// }
// func(6)

// const user = {
//     name: 'James Bond',
//     age: 30,
//     address: {
//         country: 'Georgia',
//         city: 'Tbilisi'
//     }
// }

// const name = user.name;
// const name = user['name'];
// const city = 'Batumi';

// const {name, address: {city: myCity}} = user;

// console.log(name, city, myCity);

// const arr = [1, 2, 'hello', undefined, {}, []]
// // const hello = arr[2];
// const [,, hello3] = arr;
// console.log(hello3)

const sayHello = ({name, address: {city, ...rest2}, ...rest}) => {
    console.log(rest, rest2);
    return `Hello ${name}. I'm from ${city}`;
}
console.log(sayHello(user));

const sum = (...args) => args.reduce((sum, num) => sum + num, 5);

console.log(sum(1, 2, 3, 4));