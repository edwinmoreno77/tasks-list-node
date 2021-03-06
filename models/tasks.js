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

    deleteTask(id = '') {

        if (this._list[id]) {
            delete this._list[id];
        }
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

    listCompleteTask(completed = true) {
        console.log();
        let counter = 0;
        this.listArr.forEach((task) => {

            const { desc, completedIn } = task;
            const state = (completedIn)
                ? 'Completed'.green
                : 'Pending'.red;
            if (completed) {
                //show completed
                if (completedIn) {
                    counter += 1;
                    console.log(`${counter}.`.green, `${desc} :: `, `${completedIn}`.green);
                }
            } else {
                //show pending
                if (!completedIn) {
                    counter += 1;
                    console.log(`${counter}.`.green, `${desc} :: ${state}`);
                }

            }
        });
    }

    createTask(desc = '') {

        const task = new Task(desc);

        this._list[task.id] = task;
    }

    toggleCompleted(ids = []) {

        ids.forEach(id => {

            const task = this._list[id];
            if (!task.completedIn) {
                task.completedIn = new Date().toISOString();
            }
        });

        this.listArr.forEach(task => {

            if (!ids.includes(task.id)) {
                this._list[task.id].completedIn = null;
            }
        });
    }
}

module.exports = Tasks