export default function coinCounter(input, quarters, dimes, nickels, pennies) {
  let val = input * 100;
  if (isNaN(val)) {
    return;
  }
  if (val === 0) {
    console.log(`Your change is: ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, and ${pennies} pennies.`);
  } else if (val > 25) {
    const quarRemainder = val % 25;                 // 499 % 25 = 24;
    const quarters = (val - quarRemainder) / 25;    // 475 / 25 = 19;
    val = quarRemainder;                            // val = 24;
    return coinCounter(val, quarters);
  } else if (val > 10) {
    let quarters = quarters;
    const dimesRemainder = val % 10;    // 24 % 10 = 4 etc etc etc
    const dimes = (val - dimesRemainder) / 10;
    val = dimesRemainder;
    return coinCounter(val, quarters, dimes);
  } else if (val > 5) {
    let quarters = quarters;
    let dimes = dimes;
    const nickelRemainder = val % 5;
    const nickels = (val - nickelRemainder) / 5;
    const pennies = nickelRemainder * 100;
    return coinCounter(val, quarters, dimes, nickels, pennies);
  }
}

coinCounter(4.99);
console.log(coinCounter(4.99));

// to run a js file in node, `node coin-counter.js`

// [0.25, 0.10, 0.05, 0.01]
// we could turn it into a conversion array, add a counter, and increment by 1 for each recursion, setting the conversion index equal to the counter



// const quarters = 0.25
// etc..
// const value = whatever the money inputted is..
// quarterRemainder = val % .25
// dimeRemainder = quarterRemainder % .10
// nickelRemainer = DimeRemainder % .05
// PennyRemainder = NickelRemainder % 0.01
// etc. 
// remainder amount. 
// go to next function .