/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let flag = false;
  str = str.toLowerCase();
  str = str.replaceAll(" ","");
  str = str.replaceAll(".","");
  str = str.replaceAll("!","");
  str = str.replaceAll(",","");
  str = str.replaceAll("?","");
  
  console.log(str);
  if(str === ""){
    flag = true;
    return flag;
  }

  for(let i=0;i<str.length/2;i++){
    if(str[i] === str[str.length-i-1]){
      flag = true;
    }
    else{
      flag =false;
      break;
    }
  }
  return flag;
}

module.exports = isPalindrome;
