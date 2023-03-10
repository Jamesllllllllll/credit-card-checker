# credit-card-checker

## Project for Codecademy

Credit Card Checker using the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm#Description)

I used the reverse loop example from Codecademy:

```
for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}
```

I wrote my own `if` statements to multiply every other number by 2, and subtract 9 if the result was greater than 9.

I mistakenly used `if ((i % 2) === 0)` to check if the index was an even number, but that caused a false positive with a credit card number with an uneven amount of numbers.

[This StackOverflow answer](https://stackoverflow.com/a/30713300/21346087) gave me the idea to create a second index `t`, starting at 1 and incrementing by 1 to get every other number. I didn't know you could create a second initialization and iteration statement!

***

When creating findInvalidCards() that calls validateCred() - I realized that validateCred() mutates the original array. I added a tempArr variable to store the calculations on the array indices.

The original strings seemed to be mutated when passing thru findInvalidCards(), but not when I went back and individually called them with validateCred(). I solved this by using `arr.slice()` to create a new array instead of let `tempArr = arr`. 

I puzzled for a long time why findInvalidCards() was incorrectly declaring the array `invalid4` to be valid, and most of the mystery arrays were incorrect as well. I figured out that the `total` variable in validateCred() was not being reset each time it was run with `findInvalidCards()`. I set it to 0 before returning `True` or `False`.

***

idInvalidCardCompanies() was easier to solve. However, I suspect there is a way to make the code more concise.

***

### Next Steps:

1. ~~Create findInvalidCards() that looks through an array of card numbers and returns an array of invalid card numbers.~~
2. ~~Create idInvalidCardCompanies() that returns which companies are issuing invalid numbers.~~

### Extra:

- Use numbers from a [credit card generator and validator site](https://www.freeformatter.com/credit-card-number-generator-validator.html) to test if my functions work for all types of credit cards
- Create a function that accepts a string and converts it into an array of numbers like the initially provided arrays.
- Create a function that will convert invalid numbers into valid numbers. 
