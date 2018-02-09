/*
Double Cola
Level: 5 kyu

Problem description:
Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the
queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. 
Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.
For example, Penny drinks the third can of cola and the queue will look like this:
Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
Write a program that will return the name of the person who will drink the n-th cola.

Note that in the very beginning the queue looks like that:
Sheldon, Leonard, Penny, Rajesh, Howard

Example:
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)=="Sheldon"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)=="Penny"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)=="Leonard"

*/

let whoIsNext = (names, r) => {
  if(r === 1) return names[0]
  const length = names.length
  let getIndex  = (n,i) => {
    i = i || length
    if(n < i) return Math.floor(n*length/i)
    return getIndex(n-i, 2*i)
  }
  return names[getIndex(r-1)]
 }
