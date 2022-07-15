require('colors');
const { inquirerMenu, confirm, pause, readInput, deleteTaskList, showCheckList } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');


const main = async () => {

    let option = '';
    const tasks = new Tasks();

    const tasksDB = readDB();

    if (tasksDB) {
        tasks.loadTasksFromArray(tasksDB);
    }

    do {
        option = await inquirerMenu();

        switch (option) {
            case '1':// Add task
                const desc = await readInput('Enter a task description:');
                tasks.createTask(desc);
                break;
            case '2':// List tasks
                tasks.tasksList();
                break;
            case '3':// List completed tasks
                tasks.listCompleteTask(true);
                break;
            case '4':// List pending tasks
                tasks.listCompleteTask(false);
                break;
            case '5'://complete task
                const ids = await showCheckList(tasks.listArr);
                tasks.toggleCompleted(ids);
                break;
            case '6'://delete task
                const id = await deleteTaskList(tasks.listArr);
                if (id !== '0') {
                    const confirmDelete = await confirm(`Are you sure?`);
                    if (confirmDelete) {
                        tasks.deleteTask(id);
                        console.log('\nTASK DELETED!'.red);
                    }
                }
                break;
        }

        saveDB(tasks.listArr);

        await pause();

    } while (option !== '0');
}

main();