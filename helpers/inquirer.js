const inquirer = require('inquirer');
require('colors');

const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?\n\n',
        choices: [

            {
                value: '1',
                name: `${'1.'.green} Create Task`
            },
            {
                value: '2',
                name: `${'2.'.green} List Task`
            },
            {
                value: '3',
                name: `${'3.'.green} List Completed Tasks`
            },
            {
                value: '4',
                name: `${'4.'.green} List Pending Tasks`
            },
            {
                value: '5',
                name: `${'5.'.green} Complete Task`
            },
            {
                value: '6',
                name: `${'6.'.green} Delete Task`
            },
            {
                value: '0',
                name: `${'0.'.green} Exit`
            }
        ]
    }
]

const inquirerMenu = async () => {

    console.clear();

    console.log('========================'.green);
    console.log(`==    Select a Menu   ==`.white);
    console.log('========================\n'.green);

    const { option } = await inquirer.prompt(menuOptions);

    return option;
}

const pause = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.green} to continue`,
        }
    ]

    console.log('\n')
    await inquirer.prompt(question);
}

const readInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message: message,
            validate(value) {
                if (value.length === 0) {
                    return 'Please enter a value';
                } else {
                    return true;
                }
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);

    return desc;
}

module.exports = {
    inquirerMenu,
    pause,
    readInput
}


