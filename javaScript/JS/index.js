function repeat(str) {
  let freq = {};

  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]]) {
      return str[i];
    } else {
      freq[str[i]] = true;
    }
  }
  return -1;
}

// console.log(repeat("john doe"));

const obj = {
  Name: "nagma",

  passion: "coading",

  company: "coedify",
};

const obj1 = Object.freeze(obj);

// obj === obj1;

obj1.Name = "owais";

delete obj1.passion;

// console.log(obj);
// console.log(obj1);

let pro = new Promise((res, rej) => {
  rej();
});

let calling = pro
  .then(() => {
    console.log("success 1");
  })
  .then(() => {
    console.log("success 2");
  })
  .then(() => {
    console.log("success 3");
  })
  .catch(() => {
    console.log("Error 1");
  })
  .then(() => {
    console.log("success 4");
  });

console.log(calling);
