/*
Format a string of names like 'Bart, Lisa & Maggie'.
Level: 6 kyu
Problem description: 
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an 
ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/


function list(names){
  const lngth = names.length;
  if(lngth>0){
    let returnedString ='';
    for(let i of names) {
      if(lngth ===1) return i.name;
      else {
        returnedString += i.name + ' & ';
      }    
    }
 
    let pos = returnedString.lastIndexOf("& ");
    returnedString = returnedString.match(/&/g).length >= 2? returnedString.substring(0,pos-1) : returnedString;
    let countamp = 0;
    for(let i=0; i<returnedString.length; ++i){
      if(returnedString[i] == "&") countamp++;
    }  
 
    countamp > 1? returnedString = returnedString.replace(/\s&+/g,s=> countamp-1 ? (countamp--, ','):s) : returnedString;
    return returnedString;
  }else return '';
}
