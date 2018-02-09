/*
Snail sort
Level: 4 kyu

Problem description:
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:
http://www.haan.lu/files/2513/8347/2456/snail.png

*/

let snail = array => {
  let result = []
  if(array.length === 1) return array[0]
  while(array.length){
    //first row
    result = (result ? result.concat(array.shift()) : array.shift()); 
    //steal the right items
    for (let i = 0; i < array.length; ++i) result.push(array[i].pop());
    //steal the bottom row
    result = result.concat((array.pop() || []).reverse());
    //steal the left items
    for (let i = array.length - 1; i >= 0; i--) result.push(array[i].shift());
  }
   return result;
}
