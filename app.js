require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

const main = async () => {

    let option = '';
    const tasks = new Tasks();

    do {
        option = await inquirerMenu();

        switch (option) {
            case '1':
                const desc = await readInput('Enter a task description:');
                tasks.createTask(desc);
                break;
            case '2':
                console.log(tasks.listArr);
                break;
            // case '3':
            //     tasks.completeTask();
            //     break;
            // case '4':
            //     tasks.deleteTask();
            //     break;
            // case '5':
            //     tasks.deleteAllTasks();
            //     break;
            // case '6':
            //     tasks.saveTasks();
            //     break;
            // case '0':
            //     tasks.exit();
            //     break;
            // default:
            //     console.log('Invalid option'.red);
            //     pause();
            //     break; 
        }

        await pause();

    } while (option !== '0');

}


main();