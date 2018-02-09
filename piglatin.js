/*
Simple Pig Latin
Level: 5 kyu

Problem description: 
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !

*/

function pigIt(str){
  const strArray = str.split(" ");
  let finalPigString = "";
  for(let str of strArray){
    finalPigString += str.length >= 2? str.substr(1)+str[0]+"ay ":"";
  }
  return finalPigString.slice(0, -1);
}
