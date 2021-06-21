// Coin Counter
// Create a coin counter application that takes X amount of money (such as $4.99) and determines the exact amount of change needed in quarters, dimes, nickels and pennies. Do not worry about adding a user interface to the application. Instead, focus on writing good tests and functional code.

// Part 1
// Create a coin counter function that uses recursion to solve the problem.

// Part 2
// Create a coin counter function that uses a closure that can be used with functions for each type of change (quarters, nickels, dimes and pennies). You can use recursion if you like.

// base case
// termination case
// recursion

// function countCoins(dollar amount) {
// make sure we're handling integers
// termination case
// break case
// write a recursive modulo method with conditions
// conditional for quarters
// use a modulo to find the remainder
// subtract the reminder from the total amount
// divide the difference by 25 and add the result to an output string
// conditional for dimes
// repeat quarter steps for dimes
// conditional for nickels
// repeat quarter steps for nickels
// conditional for pennies
// repeat quarter steps for pennies
// }

// 4.99
// break case is when our input % = 0
// 4.99 % .25 = .24 (19 quarters)
// .24 % .10 = .04 (2 dimes)
// .04 % .05 = .04 (0 nickels)
// .04 % .01 = 0 (4 pennies)


// counter array = [0, 0, 0, 0] -- the number of quarters, dimes, nickels, etc.
// each time we run our function, we place this array into a new variable that contains the number of each element

// quarterArray = 

// write a function that returns the input number

export default function coinCounter(input) {
  return input;
}