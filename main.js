// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:


//
// Function validateCred()

let total = 0;
const validateCred = (arr) => {
    let tempArr = arr.slice();
    for (let i = tempArr.length - 1, t = 1; i >= 0; i -= 1, t += 1) {
        // console.log(`${i}. ${tempArr[i]}`);
        if ((t % 2) === 0) {
            tempArr[i] *= 2;
            // console.log(`${i}. Multiplied by 2 = ${tempArr[i]}`);
            if (tempArr[i] > 9) {
                tempArr[i] -= 9;
                // console.log(`${i}. Subtract 9 = ${tempArr[i]}`);
            }
        }
        total = total + tempArr[i];
        // console.log(`Total: ${total}\n`)
    }
    if (total % 10 === 0) {
        total = 0;
        return true;
    } else {
        total = 0;
        return false;
    }
}

// console.log(validateCred(mystery5));


//
// Function findInvalidCards()

let invalidCards = [];
let count = 0;
const findInvalidCards = (arr) => {
    for (const card of arr) {
        count += 1;
        console.log(card);
            if (validateCred(card) === true) {
            console.log(`${count}. Card Okay: ${card.join("")}\n`);
        } else if (validateCred(card) === false) {
            console.log(`${count}. Card INVALID: ${card.join("")}\n`);
            invalidCards.push(card);
        }
    }
}


console.log(findInvalidCards(batch));

// console.log(invalidCards);


// Mystery numbers: TRUE: 2, 5 - FALSE: 1, 3, 4


//
/* Function idInvalidCardCompanies()

First Digit     Company
3 	            Amex (American Express)
4 	            Visa
5 	            Mastercard
6 	            Discover

*/

const companies = [];
const idInvalidCardCompanies = (arr) => {
    console.log("\n\nCompanies issuing faulty cards:")
    for (const card of arr) {
        if (card[0] === 3) {
            if (companies.includes("Amex")) {
            } else {
                companies.push("Amex")
            }
        }
        if (card[0] === 4) {
            if (companies.includes("Visa")) {
            } else {
                companies.push("Visa")
            }
        }
        if (card[0] === 5) {
            if (companies.includes("Mastercard")) {
            } else {
                companies.push("Mastercard")
            }
        }
        if (card[0] === 6) {
            if (companies.includes("Discover")) {
            } else {
                companies.push("Discover")
            }
        }
    }
};

idInvalidCardCompanies(invalidCards);
console.log(companies);
console.log("\n\n");