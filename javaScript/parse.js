// const obj = {
//   name: "nagma",
//   age: 21,
// };

// let obj2 = Object.assign({}, obj);
// obj2.add = "new";
// // console.log(JSON.parse(JSON.stringify(obj)));
// console.log(obj);
// console.log(obj2);

//

// const person = {
//   //   firstName: "John",
//   //   lastName: "Doe",
//   name: this.name,
//   lastname: this.lastname,
//   printName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// person.printName("miss", "nagma");

//

// let myFunc = {
//   showArgs() {
//     console.log(arguments);
//   },
// };
// myFunc.showArgs(1, 2, 3, 4);

//

// let me = {
//   name: "Ashutosh Verma",
//   thisInArrow: () => {
//     console.log("My name is " + this.name); // no 'this' binding here
//   },
//   thisInRegular() {
//     console.log("My name is " + this.name); // 'this' binding works here
//   },
// };
// me.thisInArrow();
// me.thisInRegular();

//

let arr = [
  [1, [2]],
  [3, 4],
  [],
  [5, 6],
  [7, 8, 9],
  [10, 11, 12, 13, [14, [14, 15]]],
];
// let result = [].concat.apply([], arr);
// let result = [].concat("new array", ...arr);

// let result = arr.reduce((acc, curval) => {
//   return acc.concat(curval);
// });
// let result = arr.flat(3);

let result = arr.toString().split(",");
let newarr = [];
let arr1 = result.map((val) => {
  return parseInt(val);
});
// const arr1 = [];
// arr1 = re;
console.log(arr1);

const array = [, , 3, [[[[[6, 4]]]]]];
// console.log(array.flat(Infinity));
