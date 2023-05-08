function majority(arr) {
  if (arr.length < 0) return;
  arr.sort((a, b) => {
    return a - b;
  });

  let n = arr.length;
  //   let arrcount = [];
  let maxcount = 0;
  let result = -1;
  let count = 1;
  for (let i = 0; i < n; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    } else {
      if (count > maxcount) {
        maxcount = count;
        count = 1;
        result = arr[i];
      }
    }
  }

  if (maxcount > n / 2) {
    return result;
  }
  return result;
}

// console.log(majority([4, 2, 1, 1, 4, 4, 4, 1, 4]));
//{1,1,1,1,2,3,5}

function convertdate(str) {
  str = str.split("-");
  console.log(str);
}

// console.log(convertdate("2022-11-08"));

// function outer() {
//   let name = "nagma";
//   const obj = () => {
//     console.log(name);
//   };
// }

var name = "shaya";
var obj = {
  name: "nagma",
  fun: () => {
    console.log(this.name);
  },
};

// console.log(obj.fun());

function maxrec(arr, i) {
  if (arr.length < 0) return;
  if (i == arr.length - 1) return arr[i];

  let elem = maxrec(arr, i + 1);
  return Math.max(elem, arr[i]);
}

// console.log(maxrec([2, 3, 45, 6, 1], 0));

function isPalindrome(S, i, len) {
  if (i >= len) return 1;

  if (S[i] == S[len]) {
    return isPalindrome(S, i + 1, len - 1);
  }
  return 0;
}

let str = "abbcva";

console.log(isPalindrome(str, 0, str.length - 1));

function permutation(str, cid) {
  // console.log(str);
  str = str.toString().split("");
  let temp;
  function swap(str, i, cid) {
    temp = str[i];
    str[i] = str[cid];
    str[cid] = temp;
    return str;
  }
  let i;
  if (i == str.length - 1) {
    return str;
  } else {
    for (i = cid; i < str.length; i++) {
      str = swap(str, cid, i);
      permutation(str, cid + 1);
      str = swap(str, cid, i);
    }
  }
}

// console.log(permutation("ABC", 0));

function perm(q, a) {
  if (q.length == 0) {
    console.log(a);
  }
  for (let i = 0; i < q.length; i++) {
    let ch = q[i];
    let str = q.substring(0, i) + q.substring(i + 1);
    perm(str, a + ch);
  }
}
let a = "";
// console.log(perm("abc"), a);

function memo() {
  let cache = {};
  return (num) => {
    if (num in cache) {
      console.log("yes");
      return cache[num];
    } else {
      console.log("no");
      let result = 29 + num;
      cache[num] = result;
      return cache[num];
    }
  };
}

// const memofn = memo();

// console.log(memofn(23));
// console.log(memofn(23));

// const memoizedAdd = () => {
//   let cache = {};
//   return (n) => {
//     if (n in cache) {
//       console.log("Fetching from cache");
//       return cache[n];
//     } else {
//       console.log("Calculating result");
//       let result = n + 10;
//       cache[n] = result;
//       return result;
//     }
//   };
// };

// const newAdd = memoizedAdd();
// console.log(newAdd(9));
// console.log(newAdd(9));

function subsetornot(a1, a2) {
  for (let i = 0; i < a2.length; i++) {
    console.log(a2[i]);
    if (a1.indexOf(a2[i]) == -1) {
      return "No";
    }
  }
  return "Yes";
}

// console.log(subsetornot([11, 1, 13, 21, 3, 7],[11, 3, 7, 1],6,4));

// let arr=[6,9,54,32,90];

// console.log(arr.indexOf(54));

function fiborec(n) {
  if (n == 0 || n == 1) return n;

  let res = fiborec(n - 2) + fiborec(n - 1);
  return res;
}

// console.log(fiborec(6));

function memo() {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("from cache");
      return cache[value];
    } else {
      let result = value + 20;
      cache[value] = result;
      console.log("calculating result");
      return result;
    }
  };
}

// let show = memo();
// console.log(show(10));
// console.log(show(10));

function bubble(arr) {
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubble([6,9,3,1,5,0,4]));

let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8, 9],
  [10, 11, 12, 13, 14, 15],
];

// let newarr = arr.toString().split(',');
// let res = newarr.map((val)=>parseInt(val));
// console.log(res);

// let res = [].concat(...arr);
// console.log(res);

// let stn = 'this is a sentance';

// let res = stn.split(' ').reverse().join(' ');
// console.log(res);

function shiftarr(arr) {
  for (let i = 0; i < arr.length; i++) {
    let res = [],
      count = 0;
    if (arr[i] == 2) {
      res.push(arr[i]);
    } else {
      let limit = Math.sqrt(arr[i]);
      for (let j = 3; j < limit; i += 2) {
        if (arr[i] % j != 0) {
          res.push(arr[i]);
        } else {
          count++;
        }
      }
    }
  }

  for (let i = 0; i < count; i++) {
    res.push(0);
  }
  return res;
}

// console.log(shiftarr([2,5,3,9,1,6,7,10]));

function search(arr, t) {
  let f = 0;
  let l = arr.length - 1;

  while (f <= l) {
    let mid = Math.floor((f + l) / 2);
    if (t == arr[mid]) {
      return mid;
    } else if (t > arr[mid]) {
      f = mid + 1;
    } else {
      l = mid - 1;
    }
  }
  return -1;
}

// console.log(search([2,4,6,8,10],10));

function freqstr(str) {
  let res = "",
    count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      res += str[i];
      res += count;
      count = 1;
    }
  }
  return res;
}

// console.log(freqstr('aaabbcccdd'));

function pln(str, i, j) {
  if (i > j) return true;

  if (str[i] != str[j]) {
    return false;
  }
  return pln(str, i + 1, j - 1);
}

let race = "nitin";
let i = 0,
  j = race.length - 1;

// console.log(pln(race,i,j));

function shiftZero(arr) {
  let res = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      res.push(arr[i]);
    } else {
      count++;
    }
  }

  for (let i = 0; i <= count; i++) {
    res.push(0);
  }

  return res;
}

// console.log(shiftZero([2,0,4,8,0,5,0,4,0]));

function factor(num, k) {
  if (num == 0 || num == undefined) return;

  let fact = [],
    count = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        fact.push(j);
      }
    }
    if (fact.length == k) {
      count++;
    }
    fact.length = 0;
  }
  return count;
}

// console.log(factor(6,2));

function power(n, p) {
  if (n == 0) return 0;

  if (p == 0) return 1;

  return n * power(n, p - 1);
}

// console.log(power(2,3));

function missing(arr, n) {
  let total = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return total - sum;
}

// console.log(missing([1,2,3,5],5));

function duplicate(arr) {
  let j = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[j] = arr[i];
      j++;
    }
  }
  for (let i = 0; i < j; i++) {
    console.log(arr[i]);
  }
}

// console.log(duplicate([1, 2, 3, 4, 5, 5, 6, 6, 7]));

function strstr(str) {
  for (let i = 0; i < str.length; i++) {
    let substr = "";
    for (let j = i; j < str.length; j++) {
      substr += str[j];
      console.log(substr);
    }
  }
}

// console.log(strstr('abc'));

function occur(s1, s2) {
  let j = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == s2[j]) {
      console.log(s1[i], s2[j]);
      j++;
    }
  }
}

// console.log(occur('cdoedify','dif'));

function replacezero(num) {
  if (num <= 0) return;
  let rev = "";
  let res = "";
  while (num > 0) {
    let rem = num % 10;
    rem == 0 ? (rev += 5) : (rev += rem);
    num = parseInt(num / 10);
  }
  for (let i = rev.length - 1; i >= 0; i--) {
    res += rev[i];
  }
  return parseInt(res);
}

// console.log(replacezero(1004));

function pushzero(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[j] = arr[i];
      j++;
    }
  }
  for (let i = j; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

// console.log(pushzero([1,2,0,4,0,8,0,9]));

function isogram(str) {
  let map = new Set(str);
  return str.length == map.size ? 1 : 0;
}

// console.log(isogram('aabbbbxcc'));

function toggle(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      result += str[i].toUpperCase();
    } else if (str[i] >= "A" && str[i] <= "Z") {
      result += str[i].toLowerCase();
    }
  }
  return result;
}

// console.log(toggle('NaGma'));

function maxproduct(arr) {
  let l1 = (l2 = arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > l1) {
      l2 = l1;
      l1 = arr[i];
      console.log(l1);
    } else if (arr[i] > l2 && arr[i] != l1) {
      l2 = arr[i];
    }
  }

  console.log(l1, l2);
  return l1 * l2;
}

// console.log(maxproduct([98,1,5,4,8,5,6,45,29]));

function pythoreans(a, b, c) {
  let max = a;
  if (b >= max) {
    max = b;
  } else if (c >= max) {
    max = c;
  }

  if (max == a) {
    return a * a == b * b + c * c;
  } else if (max == b) {
    return b * b == a * a + c * c;
  } else {
    return b * b == a * a + c * c;
  }
}

// console.log(pythoreans(3,3,9));

function compress(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i + 1]) {
      result += str[i];
    }
  }
  console.log(result);
}

// console.log(compress('aabbbccd'));

function compress2(str) {
  let count = 1;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i + 1]) {
      result += str[i] + count;
      count = 1;
    } else {
      count++;
    }
  }
  return result;
}

// console.log(compress2("aaaaaaaa"));

function twice(arr) {
  // let map = new Set(arr);
  // return arr.length===map.size?false:true;
  let newarr = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (newarr[arr[i]] > 0) {
      return true;
    }
    newarr[arr[i]]++;
  }
  return false;
}

// console.log(twice([1, 2, 1, 3]));

function repeat(s1, s2) {
  let temp = s2;
  let count = 0;

  while (s1.includes(temp)) {
    temp += s2;
    count++;
  }
  return count;
}

// console.log(repeat("kjshababc", "ab"));

function sumofrange(s, e) {
  c;

  if (e < 0) return;
  if (e == 0 || e == 1) return e;
  s = s - 1;
  let right = (e * (e + 1)) / 2;
  let rest = (s * (s + 1)) / 2;
  return right - rest;
}

// console.log(sumofrange(0,1));

function sumofnum(num) {
  let temp = "",
    sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (!isNaN(num[i])) {
      temp += num[i];
    } else {
      sum += parseInt(temp);
      temp = "0";
    }
  }
  return sum + parseInt(temp);
}

// console.log(sumofnum('123chsh8'));

function sumofstr(s1, s2) {
  //  s1= +s1
  //  s2= +s2
  // let res = s1+s2;
  // return res.toString();

  let n1 = 0;
  let n2 = 0;
  for (let i = 0; i < s1.length || i < s2.length; i++) {
    if (i < s1.length) {
      n1 = n1 * 10 + s1.charCodeAt(i) - 48;
      console.log(n1);
    }
    if (i < s2.length) {
      n2 = n2 * 10 + s2.charCodeAt(i) - 48;
    }
  }
}

// console.log(sumofstr('123','4'));

function permutationOfStr(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  }

  let arr = new Array(26).fill(0);

  for (let i = 0; i < s1.length && i < s2.length; i++) {
    let pos = s1.charCodeAt(i) - 97;
    arr[pos]++;
    let pos2 = s2.charCodeAt(i) - 97;
    arr[pos2]--;
  }

  for (let i = 0; i < 26; i++) {
    if (arr[i] != 0) {
      return false;
    }
  }

  return true;
}

// console.log(permutationOfStr("aaa", "aaa"));

function reverseOrder(sent) {
  let res = "";
  let temp = [];
  for (let i = sent.length - 1; i >= 0; i--) {
    if (sent[i] != " ") {
      temp.unshift(sent[i]);
    } else if (temp.length >= 1) {
      res += temp.join("") + " ";
      temp = [];
    }
  }
  res = res + temp.join("");
  return res;
}

// console.log(reverseOrder('the sky is blue'));

function coedifynum(num) {
  let arr = new Array(10).fill(0);
  arr[0] = arr[1] = 1;
  for (let i = 2; i < arr.length; i++) {
    arr[i] = arr[i - 1] * i;
  }
  let x = num;
  let sum = 0;
  while (x > 0) {
    sum += arr[x % 10];
    x = Math.floor(x / 10);
  }

  return num === sum;
}

// console.log(coedifynum(26));

function alphasort(str) {
  return str.split("").sort().join("");
}

// console.log(alphasort("zkbackj"));

function GCD_LCM(n1, n2) {
  let On1 = n1;
  let On2 = n2;
  let rem;
  while (n1 % n2 != 0) {
    rem = n1 % n2;
    n1 = n2;
    n2 = rem;
  }
  let gcd = n2;
  lcm = (On1 * On2) / gcd;

  return { gcd, lcm };
}

// console.log(GCD_LCM(24,36));

function largestsum(arr) {
  let max = 0;
  let cur = 0;
  let count = [];
  for (let i = 0; i < arr.length; i++) {
    cur += arr[i];
    if (cur > max) {
      max = cur;
    }
    if (cur <= 0) {
      cur = 0;
      count = [];
    }
  }
  return max;
}

// console.log(largestsum([5,4,-1,7,8]));

function targetnum(arr, t) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    let mid = Math.floor((i + j) / 2);

    if (arr[mid] == t) {
      return i;
    } else if (arr[mid] > t) {
      j = mid - 1;
    } else if (arr[mid] < t) {
      i = mid + 1;
    }
  }
  return -1;
}

// console.log(targetnum([-1,0,3,5,9,12],2));

function stongPassword(str) {
  let set = new Set([
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
  ]);
  let upper = (lower = digit = symbol = false);

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
      digit = true;
    } else if (set.has(str[i])) {
      symbol = true;
    } else if (str[i] === str[i].toUpperCase()) {
      upper = true;
    } else if (str[i] === str[i].toLowerCase()) {
      lower = true;
    }
  }

  if (upper && lower && digit && symbol && str.length > 8) {
    return "Strong Password";
  } else if (upper && lower && symbol) {
    return "Medium Password";
  } else {
    return "Weak Password";
  }
}

// console.log(stongPassword("NagmaN"));

function reverseWord(sent) {
  let word = [];
  let result = "";
  for (let i = 0; i < sent.length; i++) {
    if (sent[i] != " ") {
      word.unshift(sent[i]);
    } else {
      result += word.join("") + " ";
      word = [];
    }
  }

  result += word.join("");
  return result;
}

// console.log(reverseWord("Let's take LeetCode contest"));

function longpressed(name, typed) {
  if (name.length > typed.length) return false;

  let j = 0;
  for (let i = 0; i < typed.length; ) {
    if (j < name.length && typed[i] == name[j]) {
      i++;
      j++;
    } else {
      if (j != 0 && name[j - 1] == typed[i]) {
        i++;
      } else {
        return false;
      }
    }
  }
  return j == name.length;
}

// console.log(longpressed("alex", "aaleex"));

function transpose(arr) {
  // for (let i = 0; i < arr.length; i++) {
  // for (let j = 0; j < i; j++) {
  //    let temp = arr[i][j];
  //    arr[i][j]=arr[j][i];
  //    arr[j][i]=temp;
  // }
  // }
  // return arr;

  // let m = arr.length;
  // let n = arr[0].length;
  // let result = [];
  // for (let i = 0; i < n; i++) {
  //   let temp = [];
  //   for (let j = 0; j < m; j++) {
  //     temp.push(arr[j][i]);
  //   }
  //   result.push(temp);
  // }
  // return result;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  return arr;
}

console.log(
  transpose([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ])
);

function diagonalsum(arr) {
  let sum = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    sum += arr[i][i] + arr[i][n - i - 1];
  }
}

function abbre(sent) {
  let word = [];
  let temp = "";
  let result = "";
  for (let i = 0; i < sent.length; i++) {
    if (sent[i] != " ") {
      word.push(sent[i]);
    } else {
      if (word.length > 10) {
        temp += `${word[0]}${word.length - 2}${word[word.length - 1]}`;
        result += temp + " ";
        temp = "";
        word = [];
      } else {
        result += word.join("") + " ";
        word = [];
      }
    }
  }

  word.length > 10
    ? (result += `${word[0]}${word.length - 2}${word[word.length - 1]}`)
    : (result += word.join("") + " ");
  return result;
}

// console.log(
//   abbre(
//     "this is for replace of internationalization and libralization slkddfjsdkfjsdfksdjfksd"
//   )
// );

function lucky(num) {
  let fourOrSeven = 0;
  let digits = 0;
  while (num > 0) {
    let last = num % 10;
    if (last == 4 || last == 7) {
      fourOrSeven++;
    }
    num = Math.floor(num / 10);
    digits++;
  }

  if (digits == 4 || digits == 7) {
    return "YES";
  } else if (fourOrSeven == 4 || fourOrSeven == 7) {
    return "YES";
  }
  return "NO";
}

// console.log(lucky(4747));

function evenAndodd(arr) {
  let even = [];
  let odd = [];

  if (!isArray(arr)) return "not an array";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return { even, odd };
}

// console.log(evenAndodd([2, 6, 3, 2, 5, 7, 9, 3, 4, 2, 11]));

function removeConsecutive(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i + 1]) {
      result += str[i];
    }
  }
  return result;
}

// console.log(removeConsecutive("aabbc"));

function validBracket(str) {
  let brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let stack = [];
  for (const s of str) {
    if (brackets[s]) {
      stack.push(brackets[s]);
    } else {
      if (stack.pop() != s) {
        return false;
      }
    }
  }
  return stack.length == 0;
}

// console.log(validBracket("((}))"));

function removeduplicate(str) {
  let arr = new Array(26).fill(0);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (arr[str.charCodeAt(i) - 97] == 0) {
      result += str[i];
      arr[str.charCodeAt(i) - 97]++;
    }
  }
  return result;
}

// console.log(removeduplicate("cbacdcbc"));

function shiftprime(arr) {
  function prime(num) {
    if (num == 0 || num == 1) return false;
    if (num == 2 || num % 2 == 0 || num % 3 == 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0, j = 0; i < arr.length; i++) {
    if (prime(arr[i])) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
}

// console.log(shiftprime([5, 9, 7, 11, 8]));

function lcm(n1, n2) {
  let rem;
  while (n1 % n2 != 0) {
    rem = n1 % n2;

    n1 = n2;
    n2 = rem;
  }
  let gcd = n2;
  return gcd;
}

// console.log(lcm(24, 48));

function arrayrev(arr, k) {
  function rev(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++, end--;
    }
    return arr;
  }
  rev(arr, 0, k - 1);
  rev(arr, k, arr.length - 1);
  rev(arr, 0, arr.length - 1);
}

// console.log(arrayrev([1, 2, 3, 4, 5], 2));

function reverse(arr) {
  if (!Array.isArray(arr)) return "Not an Array!";
  if (arr.length % 2 == 0) return [];
  // let mid = Math.floor((f + l) / 2);

  // function rev(arr, start, end) {
  //   while (start < end) {
  //     let temp = arr[start];
  //     arr[start] = arr[end];
  //     arr[end] = temp;
  //     start++, end--;
  //   }
  //   return arr;
  // }

  // rev(arr, 0, mid - 1);
  // rev(arr, mid + 1, arr.length - 1);
  const halfway = Math.floor(arr.length / 2);

  // Reverse the elements up to the halfway point
  for (let i = 0; i < halfway; i++) {
    const temp = arr[i];
    arr[i] = arr[halfway - 1 - i];
    arr[halfway - 1 - i] = temp;
  }

  return arr;
}

// console.log(reverse([4, 5, 6, 0, 3, 4]));

function pairProduct(arr, k) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    let prod = arr[i] * arr[j];
    if (prod === k) {
      return [arr[i], arr[j]];
    } else if (prod > k) {
      j--;
    } else if (prod < k) {
      i++;
    }
  }
  return "There is no pair.";
}

// console.log(pairProduct([1, 4, 5, 7, 10], 90));

function thirdDuplicate(arr) {
  let j = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1] && arr[i] == arr[i + 2]) {
      result[j] = arr[i];
      j++;
      i = i + 2;
    } else {
      result[j] = arr[i];
      j++;
      console.log(i);
    }
  }
  return result;
}

// console.log(thirdDuplicate([1, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]));

function largestsubarray(arr) {
  let max = 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    if (total < 0) {
      total = 0;
    }
    max = Math.max(total, max);
  }
  return max;
}

// console.log(largestsubarray([5, 4, -1, 7, 8]));

function reverseVowel(str) {
  let left = 0;
  let right = str.length - 1;
  str = str.split("");
  function isVowel(alph) {
    if (
      alph == "a" ||
      alph == "e" ||
      alph == "i" ||
      alph == "o" ||
      alph == "u" ||
      alph == "A" ||
      alph == "E" ||
      alph == "I" ||
      alph == "O" ||
      alph == "U"
    ) {
      return true;
    }
    return false;
  }

  function swap(i, j) {
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    console.log(str[i], str[j]);
    // console.log(i, j);
  }
  while (left < right) {
    while (left < right && isVowel(str[left]) == false) {
      left++;
    }
    while (left < right && isVowel(str[right]) == false) {
      right--;
    }

    swap(left, right);
    console.log(left, right);
    left++, right--;
  }

  return str.join("");
}

// console.log(reverseVowel("leetcode"));

function missingRollNo(arr) {
  let sum = 0;
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let total = (n * (n + 1)) / 2;
  return total - sum;
}

// console.log(missingRollNo([9, 6, 4, 2, 3, 5, 7, 0, 1]));

function isHappy(num) {
  if (num <= 0) return false;
  let map = new Map();
  while (true) {
    let sum = 0;
    while (num != 0) {
      let value = num % 10;
      sum += value ** 2;
      num = Math.floor(num / 10);
    }

    if (sum == 1) return true;
    num = sum;

    if (map.has(num)) return false;
    map.set(num);
  }
}

// console.log(isHappy(2));

function hardLanguage(str) {
  let Upper = (LowerCase = false);
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 109) {
      if (Upper) return "NO";
      LowerCase = true;
    } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
      if (LowerCase) return "NO";
      Upper = true;
    } else if (
      (str.charCodeAt(i) >= 110 && str.charCodeAt(i) <= 122) ||
      (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77)
    ) {
      return "NO";
    }
  }

  if (Upper == false && LowerCase == true) return "Yes";
  if (Upper == true && LowerCase == false) return "Yes";
  if (Upper == false && LowerCase == false) return "No";
}

// console.log(hardLanguage("A"));

function multiply(arr) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 1) {
      max = Math.max(count, max);
      count = 0;
    } else {
      count++;
    }
  }
  max = Math.max(count, max);
  return max;
}

// console.log(multiply([1, 1, 0, 0, 1, 1, 1, 1]));

function rearrange(str) {
  str = str.split(" ");
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    let word = x.substring(0, x.length - 1);
    let pos = x.charAt(x.length - 1);
    result[pos - 1] = word;
  }
  return result.join(" ");
}

// console.log(rearrange("sentence4 a3 is2 This1"));

function majority(arr) {
  let result = 0;
  let set = {};
  let half = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    if (!set[arr[i]]) {
      set[arr[i]] = 1;
    } else {
      set[arr[i]]++;
      if (set[arr[i]] > half) {
        result = arr[i];
      }
    }
  }
  return result;
}

// console.log(majority([2, 2, 2, 2, 2, 4, 4, 4]));

function maxnum(arr) {
  let l1 = (l2 = l3 = -Infinity);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > l1) {
      l3 = l2;
      l2 = l1;
      l1 = arr[i];
    } else if (arr[i] > l2 && arr[i] != l1) {
      l3 = l2;
      l2 = arr[i];
    } else if (arr[i] > l3 && arr[i] != l2) {
      l3 = arr[i];
    }
  }
  return l3 == -Infinity ? l2 : l3;
}

// console.log(maxnum([1, 2,2]));

function containDuplicate(arr) {
  let set = {};
  for (let i = 0; i < arr.length; i++) {
    if (!set[arr[i]]) {
      set[arr[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}

// console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

function intersection(arr1, arr2) {
  let visited = {};
  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];
    visited[num] = num;
  }
  let result = [];
  for (let i = 0; i < arr2.length; i++) {
    let num = arr2[i];
    if (visited[num] != undefined) {
      result.push(num);
      visited[num] = undefined;
    }
  }
  return result;
}

// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

function missingandreapeting(arr) {
  // ................sorted..............
  // let sum = 0;
  // let repeat;
  // let n = arr.length;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] != arr[i + 1]) {
  //     sum += arr[i];
  //   } else {
  //     repeat = arr[i];
  //   }
  // }
  // let realSum = (n * (n + 1)) / 2;
  // let ans = realSum - sum;
  // return [repeat, ans];

  let set = {};
  let repeat,
    sum = 0;
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (!set[num]) {
      set[num] = 1;
    } else {
      repeat = arr[i];
    }
  }
  for (const key in set) {
    sum += parseInt(key);
  }
  let realSum = (n * (n + 1)) / 2;
  let dupli = realSum - sum;

  return [repeat, dupli];
}

console.log(missingandreapeting([6, 2, 6, 1, 4, 3, 5]));

function mergearr(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else if (arr1[i] == arr2[j]) {
      result.push(arr1[i]);
      result.push(arr2[j]);
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

// console.log(mergearr([1, 2, 3], [2, 5, 6]));

function keyReverso(str, k) {
  function reverse(str) {
    str = str.split("");
    for (
      let i = 0, j = str.length - 1;
      i < Math.floor(str.length / 2);
      i++, j--
    ) {
      let temp = str[i];
      str[i] = str[j];
      str[j] = temp;
    }
    return str.join("");
  }

  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let subAns = "";
    if ((i + 1) % k == 0) {
      subAns = str.substring(i + 1 - k, i + 1);
      ans += reverse(subAns);
    }
  }
  return ans;
}

// console.log(keyReverso("abcdef", 2));

function print(name) {
  return name;
}

function letdo(fn) {
  let res = fn("nagma");
  return res;
}

// console.log(letdo(print));

function pattern(n1) {
  let res = "";
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= i; j++) {
      res += j + " ";
    }
    console.log(res);
    res = "";
  }
}

// console.log(pattern(5, 5));

function fibo(n) {
  let n1 = 0;
  let n2 = 1;
  let res;
  console.log(n1);
  console.log(n2);
  for (let i = 0; i < n; i++) {
    res = n1 + n2;
    console.log(res);
    n1 = n2;
    n2 = res;
  }
}

// console.log(fibo(7));

function binary(arr, t) {
  let f = 0;
  let l = arr.length - 1;
  while (f <= l) {
    let m = Math.floor((f + l) / 2);
    if (arr[m] == t) {
      return m;
    } else if (t > arr[m]) {
      m = m + 1;
    } else if (t < arr[m]) {
      m = m - 1;
    }
  }
  return -1;
}

// console.log(binary([2, 4, 6, 7, 8, 9], 6));

function syncode() {
  console.log(1);
  console.log(2);
  console.log(3);

  return;
}

function asyncode() {
  console.log(1);
  setTimeout(() => {
    setTimeout(() => {
      console.log("inside");
    }, 10);
    console.log(2);
    for (let i = 0; i < 100000; i++) {
      console.log(i);
    }
  }, 0);
  console.log(3);
  return;
}

// console.log(asyncode());
// console.log(syncode());

function sumamount() {
  let arr = [
    { name: "Mantasha", amount: 100 },
    { name: "Mantasha", amount: 200 },
    { name: "Nikhil", amount: 100 },
    { name: "Nagma", amount: 100 },
    { name: "Nikhil", amount: 100 },
    { name: "Nagma", amount: 100 },
  ];
  let set = {};
  for (let i = 0; i < arr.length; i++) {
    if (!set[arr[i].name]) {
      set[arr[i].name] = arr[i].amount;
    } else {
      let sum = set[arr[i].name] + arr[i].amount;
      set[arr[i].name] = sum;
    }
  }
  return set;
}

// console.log(sumamount());

function rotatearr(arr, k) {
  if (k > arr.length) return "k is larger than array size.";
  function reverse(arr, s, e) {
    while (s < e) {
      let temp = arr[s];
      arr[s] = arr[e];
      arr[e] = temp;
      s++, e--;
    }
  }
  reverse(arr, 0, arr.length - 1 - k);
  reverse(arr, arr.length - k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);

  return arr;
}

// console.log(rotatearr([1, 2, 3, 4, 5, 6, 7], 2));

async function getData() {
  return await Promise.resolve("I made it!");
}

// getData().then((res) => console.log(res));

// parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// inheriting parent class
class Student extends Person {
  constructor(name) {
    console.log("Creating student class");

    // call the super class constructor and pass in the name parameter
    super(name);
  }
}

// let student1 = new Student("Jack");
// student1.greet();

function sortName(arr) {
  // return (arr = arr.sort());
  arr = arr.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });
  return arr;
}

// console.log(
//   sortName([
//     { name: "nagma", age: 21 },
//     { name: "anam", age: 22 },
//     { name: "mantasha", age: 23 },
//     { name: "shawy", age: 24 },
//   ])
// );

// console.log(sortName(["nagma", "anam", "fiza", "sksdj"]));
