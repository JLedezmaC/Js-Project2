import Task from './task.js';
import getFromLocalStorage from './localStorage.js';
const form = document.querySelector('form');
const input = document.querySelector('#task');
const categories = document.querySelectorAll('label input');
const array = [];
let id = 0;


function contador(num){
  let contador = num + tareas.length;
  return contador;
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

getFromLocalStorage();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  id += 1;
  const inputValue = input.value;
  const filter = categorieSelect(categories);
  const currentTask = {
    UniqueId: id,
    input: inputValue,
    categorie: filter,
    status: false
  };
  array.push(currentTask);
  const addTask = new Task(currentTask.input, currentTask.categorie, currentTask.UniqueId, currentTask.status);
  addTask.createTask();
  localStorage.setItem('Tasks', JSON.stringify(array));
  form.elements[0].value = '';
});
