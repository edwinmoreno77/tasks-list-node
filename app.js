require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

const main = async () => {

    let option = '';
    const tasks = new Tasks();

    const tasksDB = readDB();

    if (tasksDB) {
        tasks.loadTasksFromArray(tasksDB);
    }

    // await pause();

    do {
        option = await inquirerMenu();

        switch (option) {
            case '1':
                const desc = await readInput('Enter a task description:');
                tasks.createTask(desc);
                break;
            case '2':
                tasks.tasksList();
                break;
            case '3':
                tasks.listCompleteTask();
                break;
            case '4':
                tasks.listPendingTask();
                break;
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

        saveDB(tasks.listArr);

        await pause();

    } while (option !== '0');

}


main();