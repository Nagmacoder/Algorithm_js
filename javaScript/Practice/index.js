let users = [
    {
      name: "vineet",
      age: 25,
    },
    {
      name: "deepak",
      age: 30,
    },
    {
      name: "gaurav",
      age: 20,
    },
  ];


  function sortuser(users){
   let result =  users.sort((a,b)=>{
    let fn = a.name.toLowerCase();
    let ln = b.name.toLowerCase();
    if(fn<ln) return -1;
    if(fn>ln) return 1;
    return 0 ;
   });

    return result;
  }


  // console.log(sortuser(users));



let user = {
  fName: "Deepak",
  lName: "Sharma",
  print: function () {

   getFullName=()=>{
      return this.fName + " " + this.lName;
    }

    console.log(getFullName());
  },
};

// user.print();




function palind(str){
  str = str.split(' ').join('');
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z ]/g, "");
  console.log(str);
   for (let i = 0,j=str.length-1; i < Math.floor(str.length/2); i++,j--) {
       if(str[i]!==str[j]){
        return false;
       }
   }

   return true;

}

// console.log(palind('A man, a plan ,a canal: panama'));

function  isPalindrome(s) {
  s= s.toLowerCase();
  let i =0;
  let j = s.length-1;
  console.log(s);
    while(i<j){
        if(!(s[i]>='a' && s[i]<='z')){
          console.log(s[i],'kjh');
            i++;
            continue;
        }
        else if(!(s[j]>='a'&& s[j]<='z')){
            j--;
            continue;
        }
        else if(s[i]!=s[j]){
          console.log(s[i],s[j]);
            return false;
        }
        else{
          i++;
          j--;
        }
    }
    return true;
};

// console.log(isPalindrome('A man, a plan ,a canal: panama'));
// console.log(isPalindrome('race a car'));


function codiphic(s,t){
  let str1 = s.charCodeAt(0);
  let str2 = t.charCodeAt(0);
  let res = str1-str2;
  let check;
  for (let i = 1; i < s.length; i++) {
    let s1 = s.charCodeAt(i);
    let s2 = t.charCodeAt(i);
     check = s1-s2;
     console.log(res,check);
    if(res!=check){
     return false;
    }
  }
  return true;
}

// console.log(codiphic('zax','aby'));

function AllSubsets(map,str,i,asf){
   if(i===str.length){
       map.set(asf);
       return;
   }
   AllSubsets(map,str,i+1,asf);
   AllSubsets(map,str,i+1,asf+str[i]);
    
}
function unique(){
  let map = new Map();
  AllSubsets(map,'abb',0,"");
  console.log(map);
}
console.log(unique());

