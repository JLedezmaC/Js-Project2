import {deleteAllTasks, editTask, deleteTask} from './util.js';
class Task {
constructor(inputValue, filter, Currentid,status) {
    this.inputValue = inputValue;
    this.filter = filter;
    this.id = Currentid;
    this.status = status;
}
createTask() {
    const listofTasks = document.querySelector('#taskul');
    const li = document.createElement('li');
    li.setAttribute('id', this.id);
    const checkboxInput = document.createElement('input');
    checkboxInput.setAttribute('type', 'checkbox');
    checkboxInput.checked = `${status}`;
    const div = document.createElement('div');
    div.className = 'nameTask';
    const label = document.createElement('label');
    label.setAttribute('id', 'TaskName');
    label.innerHTML = `${this.inputValue}`;
    const inputText = document.createElement('input');
    inputText.setAttribute('type', 'text');
    const categoria = document.createElement('p');
    categoria.innerHTML = `${this.filter}`;
    const buttonEdit = document.createElement('button');
    buttonEdit.className = 'edit';
    const imageEdit = document.createElement('img');
    imageEdit.setAttribute('src', './img/todolist/edit-icon.png');
    buttonEdit.appendChild(imageEdit);
    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'delete';
    buttonDelete.setAttribute('id', `delete-${this.id}`);
    const imageDelete = document.createElement('img');
    imageDelete.setAttribute('src', './img/todolist/delete-icon.png');
    buttonDelete.appendChild(imageDelete);
    listofTasks.appendChild(li);
    li.appendChild(checkboxInput);
    li.appendChild(div);
    div.appendChild(label);
    div.appendChild(inputText);
    div.appendChild(categoria);
    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);
    editTask(imageEdit, li);
    deleteTask(imageDelete, li);
    deleteAllTasks();
    }
}


export default Task