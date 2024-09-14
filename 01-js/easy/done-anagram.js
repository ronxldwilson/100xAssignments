/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length){
    console.log("Cannot be anagram as length is not the same")
  }  
  let arr1 = stringArray(str1);
  let arr2 = stringArray(str2);
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  let flag = true;
  
  for(let i=0; i<str1.length;i++){
    if(arr1[i]!==arr2[i]){
      flag = false;
    }
  }

  if(flag=== false){
    return flag;
  }
  else
    return flag;
}

function stringArray(str){
  str = str.toLowerCase();
  let arr =[];
  for (let i =0 ;i<str.length;i++){
    arr.push(str[i]);
  }
  return arr;
}

// isAnagram("asd","qwe");

module.exports = isAnagram;
