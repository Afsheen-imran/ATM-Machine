#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// print welcome message

console.log(
  chalk.blackBright.bgYellow.bold(
    "\n\t****** Welcome to Code with Afsheen's ATM Machine ******\n"
  )
);

let myBalance = 50000;
let myPin = 2786;

let pinAnswer = await inquirer.prompt({
  type: "number",
  name: "pin",
  message: chalk.blueBright.bgCyan("Enter your PIN code"),
});

if (pinAnswer.pin === myPin) {
  console.log(chalk.redBright.bgGray("You have entered the correct PIN"));


let operationAnswer = await inquirer.prompt([
  {
    type: "list",
    name: "operations",
    message: "Please select an option",
    choices: ["Withdraw", "Fast Cash", "Check Balance"],
  },
]);

// If user selects the withdraw option
if (operationAnswer.operations === "Withdraw") {
  let amountAns = await inquirer.prompt([
    {
      type: "number",
      name: "amount",
      message: chalk.blackBright.bgCyan("Enter the amount you want to withdraw"),
    },
  ]);

  if (amountAns.amount <= myBalance) {
    let balance = myBalance - amountAns.amount;
    console.log(chalk.greenBright(`Your remaining balance is ${balance}`));
  } else {
    console.log(chalk.blueBright.bgGray("You have insufficient balance"));
  }
}

// If user selects the fast cash option
else if (operationAnswer.operations === "Fast Cash") {
  let fastCashAns = await inquirer.prompt([
    {
      name: "amount",
      type: "list",
      message: chalk.blueBright.bgCyan("Select the amount for Fast Cash"),
      choices: ["1000", "5000", "10000", "15000", "25000"],
    },
  ]);

  if (fastCashAns.amount <= myBalance) {
    let balance2 = myBalance - fastCashAns.amount;
    console.log(chalk.greenBright(`Your remaining balance is ${balance2}`));
  } else {
    console.log(chalk.blueBright.bgGray("You have insufficient balance"));
  }
}

// If user selects the check balance option
else if (operationAnswer.operations === "Check Balance") {
  console.log(chalk.yellowBright(`Your current balance is ${myBalance}`));
} 
}
else
 
 {console.log(chalk.blueBright.bgRed("You have entered an incorrect PIN. Please try again."))};
