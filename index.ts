#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow.bold("\n \t Welcome to Rakhail style Codes \n"));

//list of currencies and their exchange rates
let exchangeRate: any = {
    "USD": 1,
    "EURO": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70,
    //HERE WE CAN ADD MORE CURRENCIES AND THEIR EXCHANGE RATES
}

let user_answer = await inquirer.prompt([
    {
       name: "from_currency",
       type: "list",
       message: chalk.bold.magentaBright("Select the currency to convert from:"),
       choices: ["USD", "EURO", "JYP", "CAD", "AUD", "PKR"], 
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.bold.magentaBright("Select the currency to convert into:"),
        choices: ["USD", "EURO", "JYP", "CAD", "AUD", "PKR"], 
    },
    {
        name: "amount",
        type: "number",
        message: chalk.bold.italic.blueBright("Enter the amount to convert:"),
    }
]);

//Using formula perform the currency conversion
let from_amount = exchangeRate[user_answer.from_currency];
let to_amount = exchangeRate[user_answer.to_currency];
let amount = user_answer.amount

//formula
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//display the converted amount
console.log(`Converted Amount = ${chalk.italic.bgGreenBright(converted_amount.toFixed(2))}`);