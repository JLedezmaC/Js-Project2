import Task from './task.js';
import getFromLocalStorage from './localStorage.js';
const form = document.querySelector('form');
const input = document.querySelector('#task');
const categories = document.querySelectorAll('label input');
const array = [];
let num = 0;
function contadorId(num){
  return num + array.length;
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
  let contador = contadorId(num);
  const inputValue = input.value;
  const filter = categorieSelect(categories);
  const addTask = new Task(inputValue, filter, contador, false);
  addTask.createTask();
  addTask.addNewTask();
  form.elements[0].value = '';
});

export{
  array
}