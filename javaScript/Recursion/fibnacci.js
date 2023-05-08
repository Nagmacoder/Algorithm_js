function fibo(n) {
  if (n <= 1) return n;
  let res = fibo(n - 1) + fibo(n - 2);
  return res;
}

console.log(fibo(5));

function fact(n) {
  if (n == 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(5));

function printnum(n) {
  // increasing order................
  //   if (n == 0) return;
  //   printnum(n - 1);
  //   console.log(n);

  // Decresing order................
  if (n == 0) return;

  console.log(n);
  printnum(n - 1);
}

// console.log(printnum(10));

//  sum of all num

function sum(n) {
  if (n == 1) return 1;
  return n + sum(n - 1);
}

// console.log(sum(5));

// function sorted(arr, n) {

//     let elem = sorted(arr,n-1);
//     if(elem>)
// }

// console.log(sorted([1, 2, 8, 4, 5], 5));
