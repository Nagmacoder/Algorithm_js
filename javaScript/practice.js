// function User() {
//     this.name = 'Bob';
//     }

//     var user1 = new User();
//     var user2 = new User();
//    user1.last = 'xyz';
//     console.log(user1);
//     console.log(user2);

//

// function createperson(name){
//     const obj = {};
//     obj.name=name;
//     obj.greeting = function(){
//         alert('hi'+this.name);
//     }
//     return obj;
// }

// let newperson = new createperson('nagma');
// // console.log(newperson);
// console.log(createperson('angel'));

//

// let x = 6;
// function calculateGST( productPrice ) {
//     return ++productPrice;
// }

// console.log(calculateGST(x));

// console.log(x);

//

// let add = function (a, b) {
//     return a + b;
//  };

//  console.log(add(3,4));

//

// let add = (a)=>(b)=>(c)=> a+b+c;
// console.log(add(2)(9)(4));

//

console.log("hello");

// function sqr(arr) {
//   if (Array.isArray(arr)) {
//     return arr
//       .filter((val) => {
//         return val % 2 === 0;
//       })
//       .map((val) => {
//         return val * val;
//       });
//   }
// }

// let arr = [3, 4, 5, 6];
// let show = arr
//   .filter((val) => {
//     return val % 2 === 0;
//   })
//   .map((val) => {
//     return val * val;
//   });

// console.log(show);
// console.log(sqr([2, 5, 6, 7]));

let arr = [2, 5, 3, 2, 9];
// const res = [];

// function
// const a = arr.forEach((val) => {
//   if (val % 2 === 0) {
//     res.push(val);
//   }
// });

// let res = arr.sort((a, b) => {
//   return b - a;
// });
// console.log(res);

// filter own

// function filterarr(arr, condition) {
//   let result = [];
//   arr.forEach((val) => {
//     if (condition(val)) {
//       result.push(val);
//     }
//   });
//   return result;
// }

// console.log(filterarr([2, 5, 7, 3, 6, 8, 4, 23], (num) => num > 5));

// map own

// function maparr(arr, func) {
//   let result = [];
//   for (let i in arr) {
//     let ans = func(arr[i]);
//     result.push(ans);
//   }
//   return result;
// }

// console.log(maparr([4, 5, 6, 7], (num) => num * num));

const obj = {
  name: "nagma",
};

// const array = [1, 1, 1, 1, 1];
// function change(arr) {
//   //   obj.age = 21;
//   let arr2 = [0, 0, 0, 0];
//   arr = arr + arr2;
//   console.log(arr);
// }

// console.log(change(array));

// console.log(array);

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(2)(4)(6));

function pure(a, b) {
  return a + b;
}

function impure(a, b) {
  return a + b + Math.round(Math.random() * 10);
}

// console.log(impure(4, 5));

//

// let obj1 = {
//   name: "nagma",
// };

// console.log(obj1);
// function shallow(obj1) {
//   // let o1 = obj1;
//   // o1.name = "new";

//   // let o1 = Object.assign({}, obj1);
//   let o1 = { ...obj1 };
//   o1.name = "xyz";

//   return o1;
// }
// console.log(shallow(obj1));
// console.log(obj1);

//

// function toggel(str) {
//   if (str == "" || str == null || typeof str !== "string") return false;
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str.charCodeAt(str[i]) >= 48 && str.charCodeAt(str[i]) <= 57) {
//       // if (Number(str[i]) == str[i]) {
//       console.log("num");
//       result += "#";
//     } else if (str[i] === str[i].toUpperCase()) {
//       result += str[i].toLowerCase();
//     } else {
//       result += str[i].toUpperCase();
//     }
//   }

//   return result;
// }

// console.log(toggel("CoEd555ify"));

//

// function inter(arr1, arr2) {
//   let result = [];
//   let setA = new Set(arr1);
//   let setB = new Set(arr2);
//   console.log(setA);
//   if (!Array.isArray(arr1, arr2) || arr === null) return false;

//   for (const i of setA) {
//     if (setB.has(i)) {
//       result.push(i);
//       console.log(true);
//     }
//   }
//   return result;
// }

// console.log(inter([2, 4, 6, 6, 6, 7], [3, 2, 5, 7]));

// abc##de#fg#'
// function remove(str) {
//   let result = [];
//   if (str == "") return;
//   str = str.split("");
//   str.map((item, index) => {
//     result.push(item);
//     if (item == "#") {
//       result.pop();
//       result.pop();
// console.log(result);
//     }

//     return result.join("");
//   });
//   return result;
// }

// console.log(remove("abc##de#fg#"));

// subarray sum

// function subarr(arr) {
//   arr = arr.sort((a, b) => {
//     return a - b;
//   });

//   let start = 0;
//   let end = arr.length - 1;
//   let ans = -1;
//   let total = 12;

//   while (start < end) {
//     if (arr[start] + arr[end] === total) {
//       return [arr[start], arr[end]];
//     } else if (arr[start] + arr[end] > total) {
//       end--;
//     } else if (arr[start] + arr[end] < total) {
//       start++;
//     }
//   }
//   return -1;
// }

// console.log(subarr([2, 4, 21, 3, 5, 6, 6, 3, 1, 8]));

//missing number

function missing(arr) {
  let count = 1;
  let result = [];

  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== count) {
      // result.push(count);
      return count;
    }
  }

  // return result;
}

// console.log(missing([1, 2, 3, 4, 5, 6, 7, 9]));

function substr(str) {
  let result = new Set();
  let start = 0,
    end = 0;
  let max = 0;

  while (end < str.length) {
    if (!result.has(str[end])) {
      result.add(str[end]);
      end++;
      max = Math.max(max, result.size);
    } else {
      result.delete(str[start]);
      start++;
    }
  }

  return max;
}

// console.log(substr("aabb"));

function longestStr(sent) {
  let str = sent.trim().split(" ");
  str = str.sort((a, b) => {
    return a.length - b.length;
  });
  // console.log(str);
  return str[str.length - 1];
}

// console.log(longestStr("the world longest word is there.  "));

function reverseint(num) {
  if (num == undefined || num.length <= 1) return num;
  let result = "",
    n;

  while (num > 0) {
    n = num % 10;
    result += n;
    num = Math.round(num / 10);
  }

  return result;
}

// console.log(reverseint(-1));

function reverseInt(int) {
  //integer
  let isNegative = false,
    result = "",
    num;

  if (int < 0) {
    int = -int;
    isNegative = true;
  }
  console.log(int);
  while (int > 0) {
    num = int % 10;
    result += num;
    int = parseInt(int / 10);
  }

  return isNegative ? -result : result;

  //string
  // let intRev = "";
  // let start = int < 0 ? 1 : 0;
  // for (let i = start; i < int.length; i++) {
  //   intRev = int[i] + intRev;
  // }
  // return int < 0 ? "-" + intRev : intRev;
}

// console.log(reverseInt(-12246));

var isValid = function (s) {
  let check = false;
  for (let i = 0; i < s.length; i += 2) {
    switch (s[i]) {
      case "(":
        if (s[i + 1] == ")") {
          check = true;
        }
        break;
      case "{":
        if (s[i + 1] == "}") {
          check = true;
        }
        break;
      case "[":
        if (s[i + 1] == "]") {
          check = true;
        }
        break;
      default: {
        check = false;
      }
    }
  }
  return check;
};

// console.log(isValid("{()}"));

function longestword(str) {
  str = str.split(" ").sort((a, b) => {
    return a - b;
  });
  console.log(str[str.length - 1]);
}

// console.log(longestword("the world is so big but still I Evol Uoy Bilat."));

function longsec(arr) {
  let first = arr[0];
  let sec = arr[0];
  for (let i = 1, j = i + 1; i < arr.length; i++, j--) {
    if (first < arr[i]) {
      sec = first;
      first = arr[i];
    }
  }
  return [first, sec];
}

// console.log(
//   longsec([2, 5, 2, 345, 6, 546, 56, 57, 56, 2, 31, 98, 116, 9, 8, 99, 2, -1])
// );

function twosum(arr, target) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let rem = target - arr[i];
    let num = arr[i];
    if (rem + arr[i] == target && rem > 0) {
      console.log(arr[i], rem, target);
      result[num] = i;
    }
  }
  return result;
}

// console.log(twosum([2, 7, 11, 15], 9));
