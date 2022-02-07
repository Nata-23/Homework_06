"use strict";

//1
// const sumTo = (n) => (n === 1 ? n : n + sumTo(n - 1));
// console.log(sumTo(1));
// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4));

//2
// function findShort(str) {
//   let array = str.split(" ");
//   array.sort(function (a, b) {
//     return a.length - b.length;
//   });
//   return array[0];
// }
//2.1
const findShort = (str) =>
  str.split(" ").reduce((a, b) => (b.length < a.length ? b : a));

const sentance = "Lorem ipsum dolor sit amet";

console.log(findShort(sentance));
console.log(findShort("Hello world"));
console.log(findShort("Hi"));
console.log(findShort("She is David's sister"));
