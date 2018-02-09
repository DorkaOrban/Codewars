/*
Extract the domain name from a URL
Level: 5 kyu

Problem description:

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

let domainName = url => {
  let returned = url.replace("http://", "").replace("www.","").replace("https://","").split(".")[0]
  return returned;
}
