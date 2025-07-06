// This file contains the JavaScript code that handles the functionality of the Task Manager application.

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskTime = document.getElementById('taskTime');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = taskInput.value;
    const taskDateTime = taskTime.value;

    if (taskText && taskDateTime) {
        const listItem = document.createElement('li');
        listItem.textContent = `${taskText} - ${new Date(taskDateTime).toLocaleString()}`;
        taskList.appendChild(listItem);

        taskInput.value = '';
        taskTime.value = '';
    }
});