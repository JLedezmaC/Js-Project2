const form = document.querySelector('form');
const input = document.querySelector('#task');
const categories = document.querySelectorAll('label input');
const editInput= document.querySelector('#taskul input[type=text]');
const label=document.querySelector('#taskul label');
const addedTasks = document.querySelectorAll('#taskul li')
const listofTaks = document.querySelector('#taskul')
const actualTime = document.querySelector('#time')

function categorieSelect(categories) {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].checked === true) {
      const valueCategorie = categories[i].value;
      return valueCategorie;
    }
  }
}

iniciar();

function iniciar(){
  window.setInterval(currentTime,1000);
}

function currentTime(){
  let ss;
  let minutes;
  let hours;
  ss++
  if(ss > 59){
    minutes++
    ss = 0;
    return actualTime.innerHTML = `${minutes} minutes`
  }
  
  if(minutes > 59){
    hours++;
    mm = 0;
    hours;
    return actualTime.innerHTML = `${hours} hours`
  }
}

form.addEventListener('submit', function formInfo (e) {
  e.preventDefault();
  let inputValue = input.value;
  form.elements[0].value = '';
  let filter = categorieSelect(categories);
  let time = iniciar();
  let addTask = new Task(inputValue, filter,time);
  addTask.createTask();
});

class Task {
  constructor(inputValue, filter,time) {
    this.inputValue = inputValue;
    this.filter = filter;
    this.time = time;
  }

  createTask(){
    let newTask = `
    <li>
      <input type="checkbox">
      <div class="nameTask">
        <label id="TaskName">${this.inputValue}</label>
        <input type="text">
        <p>${this.filter} <span id='time'>${this.time}</span></p>
      </div>
      <button onclick = 'editTask' class="edit"><img src="./img/todolist/edit-icon.png" alt="Edit-Button"></button>
      <button onclick = 'deleteTask' class="delete"><img src="./img/todolist/delete-icon.png" alt="Delete-Button"></button>
    </li>    
  `
  listofTaks.innerHTML += newTask;
  }
}


function editTask(e){
  let currentTask = e.target.parentElement;
  currentTask.remove()
}


