/*
Descending Order
Level: 7 kyu

Problem description:
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221

*/

function descendingOrder(n){
  if(n < 0){
    return "Type a non-negative value.";
  }
  else if(n>=0 && n<10){
    return n;
  }else{
    const numbersToArray = n.toString(10).split('');
 
    let sorted = numbersToArray.sort((a,b)=>b-a);
    let newreturned = '';
    for(let i of sorted){
      newreturned += i;
    }
    return parseInt(newreturned);
  }
}
