function show() {
  let set = new Set();
  for (let i = 0; i < 5; i++) {
    set.add(i);
  }
  return set;
}

function showMap(arr) {
  let map = new Map();
  for (let i = 0; i < 5; i++) {
    map.set(i, arr[i]);
  }
  1;

  return map;
}

// console.log(show());
// console.log(showMap([1, 2, 3, 4, 5]));

const closure = () => {
  let a = 10;
  return () => {
    console.log(a);
  };
};

const result = closure();
// console.log(result());
// console.log(closure()());

const memoization = (a) => {
  let cache = {};
  if (cache[a]) {
    return cache[a];
  } else {
    result = a + 10;
    cache[a] = result;
    return result;
  }
};

// console.log(memoization(10));

function objcall() {
  const obj = { name: "nagma", age: 21, address: "xyz" };

  //   for (let s in obj) {
  //     console.log(obj[s]);
  //   }
  //   return Object.values(obj);
  //   return JSON.stringify(obj);
  //   return data;
}

// console.log(objcall());

function fib(n) {
  let n1 = 0;
  let n2 = 1;
  let res;
  console.log(n1);
  for (let i = 0; i < n; i++) {
    console.log(n2);
    res = n1 + n2;
    n1 = n2;
    n2 = res;
  }
}

// console.log(fib(7));

// let obj = {
//   name: "nagma",
//   age: 21,
//   add: "xyz",
// };

// obj.phone = 321;
// console.log(obj);
// console.log(!!NaN);
function flat(arr) {
  arr = arr.toString().split(",");
  console.log(arr);
}

// console.log(flat([1, 2, 3, 4, 6, [4, 6, 7, 7, [6, 8, 98, 9, [2, 4, 55]]]]));

function strSwap(s1, s2) {
  s1 = s1 + s2;
  s2 = s1.substr(0, s1.length - s2.length);
  s1 = s1.substr(s1.length - s2.length);
  console.log(s1, s2);
}

// console.log(strSwap("hello", "world"));

function permutationstr(str, ans) {
  if (str.length == 0) {
    console.log(ans);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let left = str.substring(0, i);
    let right = str.substring(i + 1);
    let rof = left + right;
    permutationstr(rof, ans + ch);
  }
}

// console.log(permutationstr("abc", ""));

function substr(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      res += str[j];
      console.log(res);
    }
    res = "";
  }
}

// console.log(substr("nagma"));

function poweroftwo(n) {
  while (n != 1) {
    if (n % 2 != 0 && n != 1) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

// console.log(poweroftwo(16));

function removeduplicate(arr) {
  let count = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] != arr[i + 1]) {
      arr[count++] = arr[i];
    }
  }
  for (let i = count; i < n; i++) {
    arr.pop();
  }
  // return arr.slice(0, count);
  return arr;
}

// console.log(removeduplicate([1, 1, 2, 2, 3, 3, 3, 3, 3]));

function palin(str) {
  str = str.toLowerCase();

  for (let i = 0, j = str.length - 1; i <= str.length / 2; ) {
    let left = str[i];
    let right = str[j];
    if (left == right) {
      console.log(left, right);
      i++, j--;
    } else if (!(left >= "a" && left <= "z")) {
      i++;
    } else if (!(right >= "a" && right <= "z")) {
      j--;
    } else {
      return false;
    }
  }
  return true;
}

// console.log(palin("A man, a plan, a canal: Panama"));

function longpre(name, typed) {
  if (name.length > typed.length) return false;
  let j = 0;
  for (let i = 0; i < typed.length; ) {
    if (j < name.length && typed[i] == name[j]) {
      i++, j++;
    } else {
      if (name[j - 1] == typed[i]) {
        i++;
      } else {
        return false;
      }
    }
  }
  return j == name.length;
}

// console.log(longpre("alex", "aaleex"));

function zerotofive(n) {
  let dig = 0;
  let pos = 1;
  while (n > 0) {
    dig = n % 10;
    if (dig == 0) {
      dig = 5;
      n = n + dig * pos;
      pos * 10;
    }
    n = Math.floor(n / 10);
  }
  return n;
}

// console.log(zerotofive(1005));

function shiftone(arr) {
  for (let i = 0, j = arr.length - 1; i < j; ) {
    if (arr[i] == 1 && arr[j] == 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j--, i++;
    } else if (arr[j] == 1) {
      j--;
    } else if (arr[i] == 0) {
      i++;
    }
  }
  return arr;
}

// console.log(shiftone([0, 1, 1, 0, 0, 0, 1]));

function dupli(arr) {
  let n = arr.length;
  let sum = (n * n + 1) / 2;
  for (let i = 0; i < arr.length; i++) {
    // sum += arr[i];
  }
}

// const call =function()

// create table emp2 like emp1;

// worker bonus

// select firstName,lastName from Worker
// where (select salary from worker
//   order by salary DECs where
//   WORKER_ID=5
//   )

function maxprod(arr) {
  let l1 = (l2 = -Infinity);
  let s1 = (s2 = Infinity);
  for (let i = 0; i < arr.length; i++) {
    if (l1 < arr[i]) {
      l2 = l1;
      l1 = arr[i];
    } else if (l2 < arr[i]) {
      l2 = arr[i];
    } else if (s1 > arr[i]) {
      s2 = s1;
      s1 = arr[i];
    } else if (s2 > arr[i]) {
      s2 = arr[i];
    }
  }
  let max = Math.max(l1 * l2, s1 * s2);
  return max;
}

// console.log(maxprod([-1, -1, -9, -9, 2, 6, 4, -8]));

// id gender
// 1  male
// 2  female
// 3  female
// 4  female

function firstevenfromfibbo(n) {
  let n1 = 0;
  let n2 = 1;
  let sum,
    result = [];
  if (n == 0) return;
  for (let i = 0; ; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    if (sum % 2 == 0 && n >= result.length) {
      result.push(sum);
    } else if (result.length >= n) {
      break;
    }
  }
  return result;
}

// console.log(firstevenfromfibbo(10));

// const callme = new Promise((rej, res) => {
//   if (true) {
//     res("it is resolve...");
//   } else {
//     rej("rejected.....");
//   }
// });

// callme
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function maxsub(arr) {
  let max = 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      total += arr[i];
    } else {
      total += arr[i];
      max = Math.max(max, total);
      total = 0;
    }
  }
  return max;
}

// console.log(maxsub([10, 20, 30, 5, 10, 50]));

function waterTank(arr) {
  let l = 0;
  let r = arr.length - 1;
  let area = 0;
  let max = 0;
  while (l < r) {
    area = (r - l) * Math.min(arr[l], arr[r]);
    max = Math.max(max, area);
    if (arr[l] < arr[r]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
}

// console.log(waterTank([1, 8, 6, 2, 5, 4, 8, 3, 7]));

function stock(arr) {
  let profit = 0;
  let max = 0;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    profit = arr[i] - min;
    max = Math.max(max, profit);
  }
  return max;
}

// console.log(stock([7, 1, 5, 3, 6, 4]));

function bracket(str) {
  let map = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      stack.push(map[str[i]]);
    } else if (stack.length > 0 && stack[stack.length - 1] == str[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length == 0;
}

// console.log(bracket("(([))"));

function fableWords(str) {
  let result = "";
  function reverse(str) {
    let temp;
    for (let s = 0, e = str.length - 1; s < str.length / 2; s++, e--) {
      temp = str[s];
      str[s] = str[e];
      str[e] = temp;
    }
    return str.join("");
  }

  let word = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      result += reverse(word) + " ";
      word = [];
    } else {
      word.push(str[i]);
    }
  }
  result += reverse(word);
  return result;
}

// console.log(fableWords("Let's take Hackerrank contest"));

function oddneve(str) {
  str = parseInt(str);
  if (str % 2 != 0) {
    return str;
  }
  while (str > 0) {
    if (str % 2 == 0) {
      let n = str % 10;
      str = parseInt(str / 10);
    } else {
      return str;
    }
  }
  return -1;
}

// console.log(oddneve("4206"));

function smallthan(arr) {}
// console.log(smallthan([8, 1, 2, 2, 3]));

function refixClub(arr) {
  // arr = arr.sort();
  // console.log(arr);
  // let f = arr[0];
  // let l = arr[arr.length - 1];
  // let str = "";
  // for (let i = 0; i < f.length; i++) {
  //   if (f[i] != l[i]) {
  //     break;
  //   }
  //   str += f[i];
  // }
  // return str;

  let sml = arr[0].length;
  let word = arr[0];
  let lg = arr[0].length;
  let wordlg = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < sml) {
      sml = arr[i].length;
      word = arr[i];
    } else if (arr[i].length > lg) {
      lg = arr[i].length;
      wordlg = arr[i];
    }
  }
  console.log(word, wordlg);

  let s = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] != wordlg[i]) {
      break;
    }
    s += word[i];
  }
  return s;
}

// console.log(refixClub(["abc", "abcd", "abcde", "abcdef", "abc", "abcy"]));
// console.log(refixClub(["playing", "pla", "player"]));

function palin(str) {
  let store = new Array(26).fill(0);
  let storeC = new Array(26).fill(0);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      storeC[str.charCodeAt(i) - 65]++;
    } else {
      // console.log(str.charCodeAt(i) - 97);
      store[str.charCodeAt(i) - 97]++;
    }
  }
  let even = (odd = 0);
  for (let i = 0; i < store.length && i < storeC.length; i++) {
    if (storeC[i] % 2 == 0 && storeC[i] > 0) {
      even += storeC[i];
    } else if (store[i] % 2 != 0) {
      odd++;
    }
  }

  console.log(even, odd);

  if ((odd = 1)) {
    count++;
  } else if (odd > 1) {
    count++;
  }
  return count;
}

// console.log(palin("AaAAAAc"));

function dosino(arr, t) {
  for (let i = 0, j = arr.length - 1; i < j; ) {
    if (arr[i] + arr[j] > t) {
      j--;
    } else if (arr[i] + arr[j] < t) {
      i++;
    } else if (arr[i] + arr[j] == t) {
      return [i, j];
    }
  }
  return -1;
}

// console.log(dosino([2, 7, 8, 9], 9));

function mergeology(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      result.push(arr2[j]);
      j++;
    } else if (arr1[i] == arr2[j]) {
      result.push(arr1[i], arr2[j]);
      i++, j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// console.log(mergeology([1, 2, 3], [2, 5, 6]));

function indexfix(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[arr[i]]);
  }
  return ans;
}

// console.log(indexfix([0, 2, 1, 5, 3, 4]));

function maxsub(arr) {
  let total = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      total += arr[i];
    } else {
      total += arr[i];
      max = Math.max(max, total);
      total = 0;
    }
  }
  return max;
}

// console.log(maxsub([10, 20, 30, 5, 10, 50]));
// console.log(maxsub([100, 10, 1]));

function waterTanK(arr) {
  let l = 0;
  let r = arr.length - 1;
  let max = 0;
  while (l < r) {
    let area = (r - l) * Math.min(arr[l], arr[r]);
    max = Math.max(max, area);
    if (arr[l] < arr[r]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
}

// console.log(waterTanK([1, 8, 6, 2, 5, 4, 8, 3, 7]));

function lastindex(arr, t) {
  return arr.lastIndexOf(t);
}

// console.log(lastindex([4, 5, 6, 5, 2], 7));

function powerRaise(n, p) {
  return n ** p;
}

// console.log(powerRaise(2.0, 10));

function check(str, w) {
  let s = "",
    count = 0,
    max = 0;
  let j = 0;
  let c1 = (c2 = 0);
  c1 = w.charCodeAt(0);
  c2 = w.charCodeAt(1);
  for (let i = 0; i < str.length; i++) {
    s = str[i] + str[i + 1];
    j = str.charCodeAt(i);
    if (s == w) {
      count++;
      console.log(s, w, count);
    } else if (j != c1 && j != c2) {
      count = 0;
    }
    max = Math.max(max, count);
  }

  return max;
}

// console.log(check("ababcabababab", "ab"));

function smallestsum(arr, t) {
  let sum = 0,
    min = Infinity,
    j = 0,
    len = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum < t) {
      sum += arr[i];
      j++;
    } else if (sum == t) {
      min = Math.min(min, i);
      sum = 0;
    }
    console.log(arr[i], sum, i);
  }
  return min;
}

// console.log(smallestsum([10, 10, 5, 5, 0, 3, 4, 5, 6, 29, 1], 30));

function missingandreapeting(arr) {
  let reapet = 0,
    missing = 0;
  for (let i = 0; i < arr.length; i++) {
    let j = Math.abs(arr[i]);
    if (arr[j - 1] < 0) {
      reapet = j;
    } else {
      arr[j - 1] = -arr[j - 1];
    }
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      missing = i + 1;
      break;
    }
  }
  return [reapet, missing];
}

// console.log(missingandreapeting([7, 3, 4, 5, 5, 6, 2]));

function sortcolor(arr) {
  let i = 0,
    m = 0,
    j = arr.length - 1;

  while (m <= h) {
    if (arr[m] == 0) {
      let temp = arr[m];
      arr[m] = arr[l];
      arr[l] = temp;
      l++, m++;
    } else if (arr[m] == 1) {
      m++;
    } else {
      let temp = arr[m];
      arr[m] = arr[h];
      arr[h] = temp;
      h--;
    }
  }
}

// console.log(sortcolor([0, 1, 2, 1, 0, 2]));

function exceptprod(arr) {
  let prod = 1;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    prod *= arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    // res[i] = prod / arr[i];
    res.push(prod * Math.pow(arr[i], -1));
  }
  console.log(prod);
  return res;
}

// console.log(exceptprod([1, 0]));

function permuArray(arr) {
  let result = [];

  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let remain = arr.slice(0, 1).concat(arr.slice(i + 1));
    let remainperm = permuArray(remain);

    for (let j = 0; j < remainperm.length; j++) {
      const permutedArray = [current].concat(remainperm[j]);
      result.push(permutedArray);
    }
  }

  return result;
}

// console.log(permuArray([1, 2, 3]));

function moredupli(arr) {
  let j = 0;
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    } else if (arr[i] != arr[i + 1] && count >= 3) {
      arr[j++] = arr[i];
      count = 1;
    } else if (arr[i] != arr[i + 1] && count == 2) {
      arr[j++] = arr[i];
      arr[j++] = arr[i];
      count = 1;
    } else {
      arr[j++] = arr[i];
    }
  }

  return arr;
}

// console.log(moredupli([1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5, 6, 6]));

function oddeven(arr) {
  let res = [];
  if (arr.length == 0) return;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 == 0) {
  //     res.unshift(arr[i]);
  //   } else {
  //     res.push(arr[i]);
  //   }
  // }
  // return res;
  let i = 0,
    j = arr.length - 1;
  while (i <= j) {
    if (arr[i] % 2 == 0) {
      i++;
    } else if (arr[j] % 2 != 0) {
    }
  }
}

// console.log(oddeven([3, 5, 8, 6, 4, 3, 5, 6, 9, 7]));

function palin(str) {
  let i = 0;
  j = str.length - 1;
  str = str.toLowerCase();
  while (i < j) {
    if (!(str[i] >= "a" && str[i] <= "z")) {
      i++;
    } else if (!(str[j] >= "a" && str[j] <= "z")) {
      j--;
    } else if (str[i] != str[j]) {
      return false;
    } else {
      i++, j--;
    }
  }
  return true;
}

// console.log(palin("A man, a plan, a canal: Panama"));

function checkdiff(s, t) {
  let dif = t.charCodeAt(0) - s.charCodeAt(0);
  if (dif < 0) {
    dif = dif + 26;
  }
  for (let i = 1; i < s.length; i++) {
    let cur = t.charCodeAt(i) - s.charCodeAt(i);
    cur = cur < 0 ? cur + 26 : cur;
    if (dif != cur) {
      return false;
    }
  }
  return true;
}

// console.log(checkdiff("azx", "bay"));

function subset(arr) {
  res = new Array();
  rec(0, arr, new Array(), res);

  function rec(index, arr, cur, res) {
    res.push(cur);
    console.log(res, "sdfkj");
    for (let i = index; i < arr.length; i++) {
      cur.push(arr[i]);
      rec(i + 1, arr, cur, res);
      cur.pop();
    }
  }
  return res;
}

// console.log(subset([1, 2, 3]));

function newpalin(str) {
  let i = 0,
    j = str.length - 1;

  while (i < j) {
    if ((str[i] >= 97 && str[i] <= 122) || (str[i] >= 65 && str[i] <= 90)) {
      i++;
    } else if (
      (str[j] >= 97 && str[j] <= 122) ||
      (str[j] >= 65 && str[j] <= 90)
    ) {
      j--;
    } else if (str[i] != str[j]) {
      return false;
    } else {
      i++, j--;
    }
  }
  return true;
}

// console.log(newpalin("race a car"));

function fourdupli(arr) {
  let j = 0;
  let count = 1;
  let fre = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    } else if (arr[i] != arr[i + 1] && count >= 4) {
      arr[j++] = arr[i];
      fre += 3;
      count = 1;
    } else if (arr[i] != arr[i + 1] && count >= 3) {
      arr[j++] = arr[i];
      arr[j++] = arr[i];
      arr[j++] = arr[i];
      count = 1;
    } else if (arr[i] != arr[i + 1] && count == 2) {
      arr[j++] = arr[i];
      arr[j++] = arr[i];
      count = 1;
    } else {
      arr[j++] = arr[i];
    }
  }

  for (let i = 0; i < fre; i++) {
    arr.pop();
  }

  return arr;
}

// console.log(fourdupli([1, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6]));

function evendigits(arr) {
  // let res = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] >= 10 && arr[i] <= 99) {
  //     res++;
  //   } else if (arr[i] >= 1000 && arr[i] <= 9999) {
  //     res++;
  //   }
  // }
  // return res;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    let count = 0;
    while (n > 0) {
      res = n % 10;
      n = Math.floor(n / 10);
      count++;
    }
    if (count % 2 == 0) {
      result++;
    }
  }
  return result;
}

// console.log(evendigits([12, 345, 2, 6, 7890]));

function altitude(arr) {
  let res = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
    console.log(res, arr[i]);
    max = Math.max(max, res);
  }
  return max;
}

// console.log(altitude([-5, 1, 5, 0, -7]));

function fib(num) {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}

// for (let i = 0; i < 5; i++) {
//   console.log(fib(i));
// }

function higfen(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 == 0 && str[i + 1] % 2 == 0) {
      result += str[i] + "-";
    } else {
      result += str[i];
    }
  }
  return result;
}

// console.log(higfen("2476573192475960219214"));

function flip(str) {
  let index = str[0];
  let count = 0;
  if (index == 0) {
    for (let i = 0; i < str.length; i++) {
      if (str[i + 1] == 0) {
        count++;
        i++;
      }
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i + 1] == 1) {
        count++;
        i++;
      }
    }
  }
  return count;
}

// console.log(flip("000001111111100000000000"));

// function localSet() {
//   console.log(localStorage === window.localStorage); // 👉️ true

//   localStorage.setItem("name", "Tom");

//   console.log(localStorage.getItem("name")); // 👉️ "Tom"
// }

// console.log(localSet());

function meta(s1, s2) {
  if (s1 === s2 && s1.length != s2.length) return false;

  let char = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      char.push(i);
    }
  }

  if (char.length > 2) return false;

  if (s1[char[0]] == s2[char[1]] && s1[char[1]] == s2[char[0]]) {
    return true;
  } else {
    return false;
  }
}

// console.log(meta("geeks", "keegs"));

function equilibrium(arr) {
  if (arr.length == 1) return 1;

  let fsum = arr[0];
  let lsum = arr[arr.length - 1];
  let j = arr.length - 2;

  for (let i = 1; i < arr.length; ) {
    if (fsum == lsum) {
      return j + 1;
    } else if (fsum < lsum) {
      fsum += arr[i];
      i++;
    } else if (lsum < fsum) {
      lsum += arr[j];
      j--;
    }
  }
  return -1;
}

// console.log(equilibrium([1]));
// console.log(equilibrium([1, 1, 1, 1, 5, 4]));

function printsomething(arr1, arr2) {
  for (let i = 1; i <= 100; i++) {
    let check = false;
    for (let j = 0; j < arr1.length; j++) {
      if (i % arr1[j] == 0) {
        check = true;
        console.log(arr2[j]);
      }
    }
    if (!check) {
      console.log(i);
    }
  }
  return;
}

console.log(printsomething([3, 5, 7], ["nagma", "software", "develop"]));
