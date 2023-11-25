#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";



async function Question(count: number): Promise<number> {
    let answer = await inquirer.prompt([{
        name: 'num',
        type: "input",
        message: chalk.green(`Enter the ${count} value `),
        validate: () => {
           
        }
    }])
    return +answer.num;
}

async function Operator() {
    let answer = await inquirer.prompt([{
        name: 'Operator',
        type: 'list',
        message: "Select the Operator",
        choices: ['+Addition', '-Substraction', '*Multiplication', '/Division', '=Equal']
    }])
    return answer.Operator;
}


async function main() {
    let operator: undefined;
    let sum: number = 0;
    let i = 1;
    let answer: number = await Question(i);
    operator = await Operator();
    do {

        if (operator == '+Addition') {
            i++;
            let answer2 = await Question(i);
            sum = sum + answer + answer2;
            answer = 0;
            console.log(sum);

        }
        else if (operator == '-Substraction') {
            i++;
            let answer2 = await Question(i);
            sum = (answer - answer2);
            console.log(sum);

        }
        operator = await Operator();
    } while (operator != '=Equal');
}

main();
