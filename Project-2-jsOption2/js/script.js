const form = document.querySelector('form');
const input = document.querySelector('#task');
const categories = document.querySelectorAll('label input');
const listofTaks = document.querySelector('#taskul');
const array = [];

class Task {
  constructor(inputValue, filter) {
    this.inputValue = inputValue;
    this.filter = filter;
  }

  createTask() {
    const newTask = `
    <li>
      <input type='checkbox'>
      <div class='nameTask'>
        <label id='TaskName'>${this.inputValue}</label>
        <input type='text'>
        <p>${this.filter}</p>
      </div>
      <button class="edit"><img src="./img/todolist/edit-icon.png" alt="Edit-Button"></button>
      <button class="delete"><img src="./img/todolist/delete-icon.png" alt="Delete-Button"></button>
    </li>    
  `;
    array.push(newTask);
    listofTaks.innerHTML += newTask;
  }
}

function categorieSelect(typeOfTask) {
  let valueCategorie;
  for (let i = 0; i < typeOfTask.length; i++) {
    if (typeOfTask[i].checked === true) {
      valueCategorie = typeOfTask[i].value;
    }
  }
  return valueCategorie;
}

function editTask(e) {
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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = input.value;
  form.elements[0].value = '';
  const filter = categorieSelect(categories);
  const addTask = new Task(inputValue, filter);
  addTask.createTask();
});

listofTaks.addEventListener('click', (e) => {
  const especificTask = e.target.parentElement.parentElement;
  if (e.target.tagName === 'IMG') {
    if (e.target.parentElement.classList.contains('edit')) {
      editTask(especificTask);
    } else {
      especificTask.remove();
      alert('La tarea seleccionada va a ser eliminada');
    }
  }
});
