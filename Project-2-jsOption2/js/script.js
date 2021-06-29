const form = document.querySelector('form');
const input = document.querySelector('#task');
const categories = document.querySelectorAll('label input');
const listofTasks = document.querySelector('#taskul');
const deleteAll = document.querySelector('.deleteAll h4');
const array = [];
let id = 0;
const SavedTasks = JSON.parse(localStorage.getItem('Tasks')); // Parse en JSON hace un array a un objeto 

function ChangeNameTask(e) {
  const editInput = e.querySelector('input[type=text]');// Se puede hacer un selector como queryselector desde un elemento especifico, Descubrimiento nuevo: se puede llamar a un elemento especifico usando el li en este caso en vez de document asi se es mas especifico 
  const label = e.querySelector('label');
  const TaskCreated = e.classList.contains('editMode');
  if (TaskCreated) {
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }
  e.classList.toggle('editMode');
}

class Task {
  constructor(inputValue, filter, Currentid) {
    this.inputValue = inputValue;
    this.filter = filter;
    this.id = Currentid;
  }

  createTask() {
    const li = document.createElement('li');
    li.setAttribute('id', this.id);
    const checkboxInput = document.createElement('input');
    checkboxInput.setAttribute('type', 'checkbox');
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
    this.editTask(buttonEdit, li);
    this.deleteTask(buttonDelete, li);
    this.deleteAllTasks();
  }

  editTask(buttonEdit, li) {
    buttonEdit.addEventListener('click', (e) => {
      const especificTask = li;
      if (e.target.tagName === 'IMG') {
        if (e.target.parentElement.classList.contains('edit')) {
          ChangeNameTask(especificTask);
        }
      }
    });
  }

  deleteTask(buttonDelete, li) {
    buttonDelete.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
        if (e.target.parentElement.classList.contains('delete')) {
          li.remove();
        }
      }
    });
  }

  deleteAllTasks() {
    deleteAll.addEventListener('click', () => {
      const allTasks = document.querySelectorAll('#taskul input[type=checkbox]');
      for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].checked === true) {
          const fatherOfTask = allTasks[i].parentElement;
          fatherOfTask.remove();
        }
      }
    });
  }
}

function getFromLocalStorage() {
  if (SavedTasks) {
    for (let i = 0; i < SavedTasks.length; i++) {
      const LocalTask = new Task(SavedTasks[i].input, SavedTasks[i].categorie, SavedTasks[i].UniqueId);
      LocalTask.createTask();
    }
  }
}

getFromLocalStorage();

function categorieSelect(typeOfTask) {
  let valueCategorie;
  for (let i = 0; i < typeOfTask.length; i++) {
    if (typeOfTask[i].checked === true) {
      valueCategorie = typeOfTask[i].value;
    }
  }
  return valueCategorie;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  id += 1;
  const inputValue = input.value;
  const filter = categorieSelect(categories);
  const currentTask = {
    UniqueId: id,
    input: inputValue,
    categorie: filter,
  };
  array.push(currentTask);
  const addTask = new Task(currentTask.input, currentTask.categorie, currentTask.UniqueId);
  addTask.createTask();
  localStorage.setItem('Tasks', JSON.stringify(array));
  form.elements[0].value = '';
});
