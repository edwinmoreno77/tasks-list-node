# Task list 

this is a console application to manage tasks made with NodeJs.


After downloading the repository run npm install.

```
npm install
```

When you start, the full menu is shown.

```
========================
==    Select a Menu   ==
========================

? What would you like to do?


  1. Create Task
  2. List Task
  3. List Completed Tasks
  4. List Pending Tasks
  5. Complete Task
> 6. Delete Task
  0. Exit

```
Option 1

allows you to enter the new tasks.

```
========================
==    Select a Menu   ==
========================

? What would you like to do?

 1. Create Task
? Enter a task description: study Node.js

```
Option 2 

shows the list of completed and pending tasks.

```
========================
==    Select a Menu   ==
========================

? What would you like to do?

 2. List Task

1 primera tarea :: Completed
2 segunda tarea :: Completed
3 tercera tarea :: Completed
4 cuarta tarea :: Pending
5 quinta tarea :: Pending


? Press ENTER to continue
```
Option 3 

shows a list of completed tasks with their respective date.

```
========================
==    Select a Menu   ==
========================


? What would you like to do?

 3. List Completed Tasks

1. primera tarea ::  2022-07-15T23:10:48.809Z
2. segunda tarea ::  2022-07-15T23:10:48.809Z
3. tercera tarea ::  2022-07-15T23:10:48.809Z


? Press ENTER to continue
```
Option 4 

shows a list of pending task.

```
========================
==    Select a Menu   ==
========================

? What would you like to do?

 4. List Pending Tasks

1. quinta tarea :: Pending
2. study Node.js :: Pending


? Press ENTER to continue
```
Option 5 

allows you to change the status of the tasks, you can change pending to completed or vice versa.

```
========================
==    Select a Menu   ==
========================

? What would you like to do?

 5. Complete Task
? Selections (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) 1. segunda tarea
 (*) 2. tercera tarea
 (*) 3. cuarta tarea
 ( ) 4. quinta tarea
 ( ) 5. study Node.js
 ```
 
Option 6 

allows you to delete tasks

```
 ========================
==    Select a Menu   ==
========================

? What would you like to do?

 6. Delete Task
?
Select a task to delete
 (Use arrow keys)
> 0. Cancel
  1. segunda tarea
  2. tercera tarea
  3. cuarta tarea
  4. quinta tarea
  5. study Node.js
```
Option 0

exit.

```
========================
==    Select a Menu   ==
========================

? What would you like to do?

 0. Exit


? Press ENTER to continue
