# credit-card-checker

Project for Codecademy

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


