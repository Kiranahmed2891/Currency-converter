#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const currencies = [
    { name: 'USD', value: 1 },
    { name: 'EUR', value: 0.91 },
    { name: 'GBP', value: 0.76 },
    { name: 'INR', value: 74.57 },
    { name: 'PKR', value: 280 }
];
console.log(chalk.green('Welcome to the Currency Converter!'));
(async () => {
    while (true) {
        let userAns = await inquirer.prompt([
            {
                name: 'from',
                type: 'list',
                message: chalk.magenta('Enter From Currency?'),
                choices: currencies.map(currency => currency.name)
            },
            {
                name: 'to',
                type: 'list',
                message: chalk.cyan('Enter To Currency?'),
                choices: currencies.map(currency => currency.name)
            },
            {
                name: 'amount',
                type: 'number',
                message: chalk.yellowBright('Enter Your desired Amount you want to convert?'),
            }
        ]);
        let fromCurrency = currencies.find(currency => currency.name === userAns.from);
        let toCurrency = currencies.find(currency => currency.name === userAns.to);
        let amount = userAns.amount;
        let convertedAmount = amount / fromCurrency.value * toCurrency.value;
        console.log(chalk.green(`Converted Amount: ${convertedAmount.toFixed(2)} ${userAns.to}`));
        let confirm = await inquirer.prompt([
            {
                name: 'toprocess',
                type: "list",
                message: chalk.cyanBright("You want to Continue or Exit?"),
                choices: ['Continue', 'Exit']
            }
        ]);
        if (confirm.toprocess === 'Exit') {
            console.log(chalk.red("Thanks For using CLI Currency Converter"));
            break;
        }
    }
})();
