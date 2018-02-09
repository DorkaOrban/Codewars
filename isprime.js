/*
Is a number prime?
Level: 6 kyu

Problem description:
Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer 
is a prime.
Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Example
isPrime(5)
=> true
*/

const isPrime = num => {
    if(num < 2) return false;
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1;
}
