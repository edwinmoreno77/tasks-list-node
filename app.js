require('colors');

const { inquirerMenu, pause } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

const main = async () => {

    let option = '';

    do {
        option = await inquirerMenu();

        await pause();

    } while (option !== '0');

}


main();