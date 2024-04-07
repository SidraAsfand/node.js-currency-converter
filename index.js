#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    PKR: 1, //  pakistan  based currency
    USD: 0.0036, //Dollar
    SYR: 9.22, //syrianpound
    IND: 0.3, //indian currency
    BTC: 0.000000052, //Bit _coin
};
let userInput = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "To input currency!",
        choices: ["PKR", "USD", "IND", "BTC", "SYP"],
    },
    {
        name: "to",
        type: "list",
        message: "From input currency!",
        choices: ["PKR", "USD", "IND", "BTC", "SYP"],
    },
    {
        name: "Amount",
        type: "number",
        message: "Enter Amount!",
    },
]);
let fromAmount = currency[userInput.from]; //exchange rate
let toAmount = currency[userInput.to]; //exchange rate
let amount = userInput.Amount;
let baseAmount = amount / fromAmount; //PKR based currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
