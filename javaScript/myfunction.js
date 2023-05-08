// function myfunc() {
//   console.log("function called");
// }
// // function debounce(func, delay) {
// //   let timer = 0;
// //   return function () {
// //     let context = this;
// //     clearTimeout(timer);
// //     timer = setTimeout(() => {
// //       func.apply(context);
// //     }, delay);
// //   };
// // }
// // const betterfunc = debounce(myfunc, 2000);

// function throttling(func, delay) {
//   let flag = true;
//   return function () {
//     let context = this;
//     if (flag) {
//       func.apply(context);
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, delay);
//     }
//   };
// }

// const betterexp = throttling(myfunc, 1000);


