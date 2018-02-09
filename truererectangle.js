/*
Rectangle into Squares
Level: 6 kyu

Problem description:
The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions 
are different).
http://i.imgur.com/lk5vJ7sm.jpg

You will be given two dimensions
- a positive integer length (parameter named lng)
- a positive integer width (parameter named wdth)
You will return an array with the size of each of the squares.

Shell bash returns a string.

  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
  sqInRect(5, 5) should return null
  
*/

const sqInRect = (lng, wdth) => {
  if(lng === wdth) return null
  let result = []
  while(wdth !== lng){
    if(wdth >lng ){
      wdth -= lng
      result.push(lng)
    }else if(lng > wdth){
       lng -= wdth;
       result.push(wdth)
    }
  }result.push(wdth)
  return result
}
