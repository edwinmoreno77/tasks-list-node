const Task = require("./task");
require('colors');


class Tasks {

    _list = {};

    get listArr() {

        const list = [];
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            list.push(task);
        });

        return list;
    }

    constructor() {
        this._list = {};
    }

    loadTasksFromArray(tasks = []) {

        tasks.forEach(task => {
            this._list[task.id] = task;

        });
        // this._list = tasks;
    }

    tasksList() {
        console.log();
        this.listArr.forEach((task, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completedIn } = task;
            const state = (completedIn)
                ? 'Completed'.green
                : 'Pending'.red;
            console.log(`${idx} ${desc} :: ${state}`);
        });
    }

    listCompleteTask() {
        console.log();
        this.listArr.forEach((task, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completedIn } = task;
            if (completedIn) {
                console.log(`${idx} ${desc} ::`, `completed`.green);
            }
        });
    }

    listPendingTask() {
        console.log();
        this.listArr.forEach((task, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completedIn } = task;
            if (!completedIn) {
                console.log(`${idx} ${desc} ::`, `Pending`.red);
            }
        });
    }


    createTask(desc = '') {

        const task = new Task(desc);

        this._list[task.id] = task;
    }
}

module.exports = Tasks