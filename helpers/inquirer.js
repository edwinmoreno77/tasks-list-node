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
                name: '1. Create Task'
            },
            {
                value: '2',
                name: '2. List Task'
            },
            {
                value: '3',
                name: '3. List Completed Tasks'
            },
            {
                value: '4',
                name: '4. List Pending Tasks'
            },
            {
                value: '5',
                name: '5. Complete Task'
            },
            {
                value: '6',
                name: '6. Delete Task'
            },
            {
                value: '0',
                name: '0. Exit'
            }
        ]
    }
]

const inquirerMenu = async () => {

    console.clear();

    console.log('========================'.green);
    console.log(`==    Select a Menu   ==`.green);
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

module.exports = {
    inquirerMenu,
    pause
}


