require('colors');


// ejemplo educatiivo de otra forma de hacerlo sin usar el inquirer


const showMenu = () => {

    return new Promise(resolve => {


        console.clear();

        console.log('========================'.green)
        console.log('==    Select a Menu   =='.green)
        console.log('========================\n'.green)

        console.log(`${'1.'.green} create task`);
        console.log(`${'2.'.green} list task`);
        console.log(`${'3.'.green} list completed tasks`);
        console.log(`${'4.'.green} list pending tasks`);
        console.log(`${'5.'.green} complete task`);
        console.log(`${'6.'.green} delete task`);
        console.log(`${'0.'.green} exit\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Select a option: ', (option) => {
            readline.close();
            resolve(option);
        });
    });
}

const pause = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPress ${'ENTER'.green} to continue\n`, (option) => {
            readline.close();
            resolve();
        });
    });
}

module.exports = {
    showMenu,
    pause
}
