const taskform = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

taskform.onsubmit = function (event) {
    event.preventDefault();
    const inputField = document.getElementById('taskBox');
    inputField.value == "" ? alert("Digite a descrição da tarefa."): addTask(inputField.value);
    form.reset();
}

function addTask(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type','checkbox');
    newTask.setAttribute('name',description);
    newTask.setAttribute('id',description)

    taskLabel.setAttribute('for',description);
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('taskItem');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer);
}