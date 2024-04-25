#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.redBright("\n\t Welcome to Naila Solanki - Currency Converter Project \n"));
//Define the list of currencies and their exchange rates.
let exchangeRate = {
    USD: 1,
    EUR: 0.95,
    PKR: 280,
    INR: 83.38,
    SAR: 3.75,
    CAD: 1.37,
    AUD: 1.55,
    JYP: 155,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.bold.blue("Select the Currency to Convert from:"),
        choices: ["USD", "EUR", "PKR", "INR", "SAR", "CAD", "AUD", "JYP"],
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.bold.green("Select the Currency to Convert into:"),
        choices: ["USD", "EUR", "PKR", "INR", "SAR", "CAD", "AUD", "JYP"],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.bold.redBright("Enter the Amount to Convert:"),
    },
]);
//Perform currency conversion by using formula.
let fromAmount = exchangeRate[userAnswer.from_currency];
let toAmount = exchangeRate[userAnswer.to_currency];
let amount = userAnswer.amount;
//Formula of conversion.
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
//display the converted amount.
console.log(chalk.bold.yellowBright(`Converted Amount = ${chalk.bold.magentaBright(convertedAmount.toFixed(2))}`));
