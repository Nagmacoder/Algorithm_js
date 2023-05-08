// function sum(a, b) {
//   return new Promise((res, rej) => {
//     if (a > 0 && b > 0) {
//       res("true");
//     } else {
//       rej("false");
//     }
//   });
// }

// sum(0, 0)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//
//async / await

// async function show() {
//   let res = await new Promise((response) => {
//     setTimeout(() => {
//       response(console.log("1"));
//     }, 1000);
//   });
//   console.log("hello");
//   let res2 = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(console.log("2"));
//     }, 500);
//   });
//   console.log("end");
// }

// show();

//

// function asynchronous_operational_method() {
//   let first_promise = new Promise((resolve, reject) => resolve("Hello"));
//   let second_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(" GeeksforGeeks..");
//     }, 1000);
//   });
//   let combined_promise = Promise.all([first_promise, second_promise]);
//   return combined_promise;
// }

// asynchronous_operational_method()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//

// async function apicall() {
//   let fetchdata = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((data) => data);
//   document.write(fetchdata.title);
// }

// apicall();

// function fibbo(n) {
//   let n1 = 0;
//   let n2 = 1,
//     result = [],
//     next;
//   for (let i = 1; i <= n; i++) {
//     result[i - 1] = n1;
//     next = n1 + n2;
//     n1 = n2;
//     n2 = next;
//   }

//   return result;
// }

// console.log(fibbo(10));

function seclarge(arr) {
  let large1 = arr[0];
  let large2 = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > large1) {
      large2 = large1;
      large1 = arr[i];
    } else if (arr[i] > large2) {
      large2 = arr[i];
    }
  }

  return { large1, large2 };
}

console.log(seclarge([8, 5, 3, 0, -8, 3678, 9, 534, 23, 2]));
