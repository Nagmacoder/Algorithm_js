// function fibo(n) {
//   let n1 = 0;
//   let n2 = 1;
//   let next;
//   let result = [];

// if (n < 1) {
//   return [n1, n2];
// }
//   for (let i = 1; i <= n; i++) {
//     result[i - 1] = n1;
//     next = n1 + n2;
//     n1 = n2;
//     n2 = next;
//   }
//   return result;
// }

// console.log(fibo(6));

// function fiborec(n) {
//   let result = [];
//   if (n == 0 || n == 1) {
//     return n;
//   }
//   result = fiborec(n - 1) + fiborec(n - 2);
//   return result;
// }

// console.log(fiborec(10));

// function fact(n) {
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact = fact * i;
//   }

//   return fact;
// }

// console.log(fact(5));

// function factrec(n) {
//   if (n == 0 || n == 1) {
//     return 1;
//   }

//   return n * factrec(n - 1);
// }

// console.log(factrec(5));

// function prime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return "not prime no.";
//     }
//   }
//   return "prime no.";
// }

// console.log(prime(5));

// let arr = [2, 4, 5, 6, 7, 9];
// function mid(arr) {
//   let num = (result = Math.floor(arr.length / 2));
//   if (arr.length % 2 !== 0) {
//     return arr[num];
//   }

//   return [arr[num - 1], arr[num]];
// }

// console.log(mid(arr));

// let arr = [9, 6, 3, 2, 6, 5, 0];
// function bubble(arr) {
//   let temp = 0;
//   for (let j = 0; j < arr.length; j++) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         // console.log(arr);
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubble(arr));

// function revers(str) {
//   let temp;
//   if (typeof str == "string") {
//     return str.split("").reverse().join("");
//   }

//   for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
//   return arr;
// }

// console.log(revers("nagma"));

// function convert(n) {
//   let num = n.toString().split("");

//   for (let i = 0; i < num.length; i++) {
//     if (num[i] == 0) {
//       num[i] = 5;
//     }
//   }

//   return num.join("");

//   let sum = n;
// }

// console.log(convert(121));

// function pushzero(arr) {
//   let count = 0;

//   if (arr == null || arr.length == 0 || !Array.isArray(arr)) return;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[count] = arr[i];
//       count++;
//     }
//   }

//   while (count < arr.length) {
//     arr[count] = 0;
//     count++;
//   }
//   return arr;
// }

// console.log(pushzero([0, 3, 5, 0, 0, 5]));

// function reverseAndConvert(num) {
//   let ans = 0;
//   while (num > 0) {
//     let dig = 0;
//     dig = num % 10;
//     if (dig === 0) {
//       dig = 5;
//     }
//     ans = ans * 10 + dig;
//     num = parseInt(num / 10);
//   }
//   return ans;
// }

// console.log(reverseAndConvert(1004));

//   function convertZeroToFive(num) {
//     if (typeof num != "number") return "not a number";
//     let ans = reverseAndConvert(num);
//     return reverseAndConvert(ans);
//   }
//   console.log(convertZeroToFive(120789320004000));

// function infiniteCurrying(a) {
//   return function (b) {
//     if (!b) return a;
//     return infiniteCurrying(a + b);
//   };
// }

// console.log(infiniteCurrying(2)(3)(7)(5)());

// moduler

// function sumint(num) {
//   if (num == null || num == NaN || num <= 0) return;
//   let sum = 0;
//   while (num > 0) {
//     let lastnum = num % 10;
//     if (lastnum === 0) {
//       lastnum = 5;
//     }
//     sum = sum * 10 + lastnum;
//     num = parseInt(num / 10);
//   }

//   num = sum;
//   sum = 0;

//   while (num > 0) {
//     r = num % 10;
//     sum = sum * 10 + r;
//     num = parseInt(num / 10);
//   }

//   return sum;
// }

// console.log(sumint(2004));

//
//

// function binary(arr) {
//     if (arr == null || arr.length < 1 || !Array.isArray(arr)) return;
//   let first = 0;
//   let last = arr.length;
//   let mid = Math.floor((first + last) / 2);
//   let search = 89;

//   console.log(first, last, mid);
//   while (first <= last) {
//     if (arr[mid] == search) {
//       return mid;
//     } else if (arr[mid] < search) {
//       first = mid + 1;
//       mid = Math.floor((first + last) / 2);
//     } else if (arr[mid] > search) {
//       last = mid - 1;
//       mid = Math.floor((first + last) / 2);
//     }
//   }
//   return -1;
// }

// console.log(binary([0, 0, 0, 1, 2, 3, 4, 6, 10, 89]));

function rotate(arr, k) {
  let p = 1;
  if (k < 0 || k > arr.length) return;
  //   for (let i = arr.length - 1; i >= 0; i--) {
  //     arr[i] = arr[i - 1];
  //   }
  //   arr[0] = n;
  //
  let pos = 0;
  while (p <= k) {
    let n = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[pos] = n;
    console.log(arr);
    pos++;
    p++;
  }
  return arr;
}

// console.log(rotate([1, 2, 3, 4, 5, 6], 2));

// function merge(arr1, arr2) {
//   let arr3 = [];
//   let n1 = arr1.length;
//   let n2 = arr2.length;
//   let i = 0,
//     j = 0;
//   arr1 = arr1.sort((a, b) => {
//     return a - b;
//   });
//   arr2 = arr2.sort((a, b) => {
//     return a - b;
//   });
//   while (i < n1 && j < n2) {
//     if (arr1[i] < arr2[j]) {
//       arr3.push(arr1[i]);
//       i++;
//     } else if (arr2[j] < arr1[i]) {
//       arr3.push(arr2[j]);
//       j++;
//     } else {
//       arr3.push(arr1[i]);
//       arr3.push(arr2[j]);
//       i++;
//       j++;
//     }
//   }

//   while (i < n1) {
//     arr3.push(arr1[i]);
//     i++;
//   }
//   while (j < n2) {
//     arr3.push(arr2[j]);
//     j++;
//   }

//   return arr3;
// }

// console.log(merge([3, 2, 5, 49, 6, 3, 2], [9, 2, 0, 48, 4, 7, 1]));

// function deleteodd(str) {
//   let result;
//   for (let i = 0; i < str.length; i + 2) {
//     result += str[i];
//   }
// }

//

//

// function shiftprime(arr) {
//   let primeno = [];
//   if (arr == null || arr.length < 1 || !Array.isArray(arr)) return;
//   function prime(n) {
//     if (n == 0 || n == 1) return true;
//     for (let i = 2; i * i <= n; i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let res = prime(arr[i]);
//     if (res) {
//       primeno.push(arr[i]);
//       arr[i] = -1;
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== -1) {
//       primeno.push(arr[i]);
//     }
//   }
//   return primeno;
// }

// console.log(shiftprime([9, 4, 6, 2, 3, 35, 5, 4, 3, 5, 8, 7]));

//

// function findtriplet(arr) {
//   if (arr == null || arr.length < 3 || !Array.isArray(arr)) return;
//   arr = arr.sort((a, b) => {
//     return a - b;
//   });
//   console.log(arr);
//   let result = [];
//   for (let i = 0; i < arr.length - 2; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) continue;
//     let f = i + 1;
//     let l = arr.length - 1;
//     let x = arr[i];

//     while (f < l) {
//       if (arr[f] + arr[l] + x === 0) {
//         result.push([arr[f], arr[l], x]);
//         f++;
//         l--;
//         while (f < l && arr[f] === arr[f - 1]) f++;
//         while (f < l && arr[l] === arr[l + 1]) l--;
//       } else if (arr[f] + arr[l] + x < 0) {
//         f++;
//       } else {
//         l--;
//       }
//     }
//   }
//   return result;
// }

// console.log(findtriplet([-1, 0, 1, 2, -1, -4]));

//

//
// function isPrime(num) {
//   if (typeof num !== "number") return "Not a numer";
//   if (num < 0) return false;
//   for (let i = 2; i <= num ** (1 / 2); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function shiftPrimeToLeft(arr) {
//   if (!Array.isArray(arr)) return "Not an array";

//   let res = [...arr];

//   let i = 0,
//     j = 0;
//   let flag = true;
//   while (flag) {
//     if (typeof res[i] !== "number" || typeof res[j] !== "number")
//       return "all elements should be number";
//     if (isPrime(res[i]) && isPrime(res[j])) {
//       i++;
//       j++;
//     } else if (!isPrime(res[i]) && isPrime(res[j])) {
//       temp = res[i];
//       res[i] = res[j];
//       res[j] = temp;
//       j++;
//       i++;
//     } else j++;
//     if (i === res.length || j === res.length) flag = false;
//   }
//   return res;
// }

// let arr = [4, 2, 3, 4, 5, 6, 7, 8, 7];
// console.log(shiftPrimeToLeft(arr));

// function removeodd(str) {
//   let result = "";
//   if (str.length < 0 || str == null || str == "") return;
//   for (let i = 0; i < str.length; i += 2) {
//     result += str[i];
//   }

//   return result;
// }

// console.log(removeodd("GeeksforGeeks"));

//

// function star(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       document.write("*");
//     }
//     document.write("<br>");
//   }
// }

// console.log(star(5));

// function palin(str) {
//   if (str.length < 0 || str == null || str == "") return;
//   for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
//     if (str[i] !== str[j]) return false;
//   }
//   return true;
// }

// console.log(palin("nitin"));

// function fibo(x) {
//   let n = 0,
//     n1 = 1;
//   let next,
//     result = [];
//   if (x < 1) return 0;
//   for (let i = 1; i <= x; i++) {
//     result[i - 1] = n;
//     next = n + n1;
//     n = n1;
//     n1 = next;
//   }
//   return result;
// }

// console.log(fibo(10));

// function duplicate(arr) {
//   if (arr.length < 2 || !Array.isArray(arr) || arr == null) return;
//   let result = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     result.add(arr[i]);
//   }
//   return result;
// }

// console.log(duplicate([2, 3, 4, 2, 3, 4, 5, 6, 5, 0]));\

//

// function palinrec(str) {
//   if (str == "" || str.length <= 1 || typeof str !== "string") return;
//   return str;
// }

//

// function substr(str) {
//   //   let result = "";
//   //   if (str == "" || str.length < 1 || typeof str !== "string") return;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[i + 1]) {
//       console.log("in");
//       console.log(str[i], str[i + 1]);
//     }
//   }

//   //   return result;
// }

// console.log(substr("ababcbc"));

//

// function fibbo(num) {
//   if (num < 1) return 0;
//   let n1 = 0;
//   let n2 = 1;
//   let next;
//   let result = [];
//   for (let i = 1; i <= num; i++) {
//     result[i - 1] = n1;
//     next = n1 + n2;
//     n1 = n2;
//     n2 = next;
//   }

//   return result;
// }

// console.log(fibbo(10));

// function fibb(num) {
//   if (num < 1) return 0;
//   if (num == null || typeof num !== "number") return;

//   let n1 = 0;
//   let n2 = 1;
//   let next;
//   result = [n1, n2];
//   for (let i = 0; i < num; i++) {
//     next = n1 + n2;
//     result.push(next);
//     n1 = n2;
//     n2 = next;
//   }

//   return result;
// }

// console.log(fibb(7));

// function rotatearr(arr) {
//   if (!Array.isArray(arr) || arr == null || arr.length < 1)
//     return "not valid array ";

//   for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
//     let temp;
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
//   return arr;
// }

// console.log(rotatearr([1, 2, 3, 4, 5, 6]));

// function mergearr(arr, arr2) {
//   let result = [...arr, ...arr2];

//   result.sort((a, b) => {
//     return a - b;
//   });

//   return result;
// }

// console.log(mergearr([2, 4, 2, 1, 4, 5], [6, 5, 6, 5, 1, 5, 4, 3]));

// function anticlock(arr, k) {
//   let result = [];
//   function reverse(start, k) {
//     for (let i = start, j = k; i < j; i++, j--) {
//       let temp;
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }

//     return arr;
//   }
//   reverse(0, k - 1);
//   reverse(k, arr.length - 1);
//   reverse(0, arr.length - 1);

//   return arr;
// }

// console.log(anticlock([1, 2, 3, 4, 5], 2));

// function reverseint(n) {
//   let num,
//     ans = 0;
//   while (n > 0) {
//     num = n % 10;
//     ans = ans * 10 + num;
//     n = parseInt(n / 10);
//   }
//   return ans;
// }

// console.log(reverseint(124));
