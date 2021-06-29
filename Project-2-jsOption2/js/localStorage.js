import Task from './task.js';
function getFromLocalStorage() {
const SavedTasks = JSON.parse(localStorage.getItem('Tasks')); // Parse en JSON hace un array a un objeto 
if (SavedTasks) {
    for (let i = 0; i < SavedTasks.length; i++) {
    const LocalTask = new Task(SavedTasks[i].input, SavedTasks[i].categorie, SavedTasks[i].UniqueId);
    LocalTask.createTask();
    }
}
}

export default getFromLocalStorage;