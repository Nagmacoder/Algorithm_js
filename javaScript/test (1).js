// aaaacccccbbbbdddeeefff
function freq(str) {
  if (str == "" || str == null || str.lenght < 0) return false;
  // str = str.split("").sort();
  let count = 1;
  let result = [];

  // console.log(str);
  // for (let i = 0; i < str.length; i++) {
  //   for (let j = 1; j < str.length; j++) {
  //     if (str[i] == str[j]) {
  //       count++;
  //       str[j] = 0;
  //     }
  //   }
  //   console.log(result);
  //   result.push(count);
  //   count = 1;
  // }

  //

  //2

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      result[str.charCodeAt(i) - 65] = 1;
    }
    // result = str.charCodeAt(i);
  }

  return result;
}

// console.log(freq("aabbaacccccbbbbdddeeefff"));

//

//

function subpalin(str) {
  if (str.length < 0 || str == null) return false;

  let substr = "";
  let result,
    palindrome = [];

  function palin(substr) {
    let n = substr.length;
    for (let i = 0, j = n - 1; i < n / 2; i++, j--) {
      if (substr[i] !== substr[j]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      substr = str.substring(i, j);
      result = palin(substr);
      if (result) {
        palindrome.push(substr);
      }
      console.log(result);
    }
  }

  // console.log(palindrome);
  let max = palindrome[0];
  // for (let i = 1; i < palindrome.length; i++) {
  //   if (palindrome[i].length > max.length) {
  //     console.log(palindrome[i].length, max.length);
  //     max = palindrome[i];
  //   }
  // }
  var longest = palindrome.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });

  return longest;
}

// console.log(subpalin("sirmadamsir"));


let obj = {
  name:'nagma',
  
}