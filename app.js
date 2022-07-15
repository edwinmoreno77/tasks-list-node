require('colors');
const { inquirerMenu, confirm, pause, readInput, deleteTaskList } = require('./helpers/inquirer');
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
                tasks.listCompleteTask(true);
                break;
            case '4':
                tasks.listCompleteTask(false);
                break;
            case '5':
                // tasks.deleteAllTasks();
                break;
            case '6':
                const id = await deleteTaskList(tasks.listArr);
                if (id !== '0') {
                    const confirmDelete = await confirm(`Are you sure?`);
                    if (confirmDelete) {
                        tasks.deleteTask(id);
                        console.log('\nTASK DELETED!'.red);
                    }
                }
                break;
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