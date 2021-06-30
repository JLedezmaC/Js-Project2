import Task from './task.js';
function getFromLocalStorage() {
const SavedTasks = JSON.parse(localStorage.getItem('Tasks')); 
if (SavedTasks) {
    for (let i = 0; i < SavedTasks.length; i++) {
    const LocalTask = new Task(SavedTasks[i].input, SavedTasks[i].categorie, SavedTasks[i].UniqueId,SavedTasks[i].status);
    LocalTask.createTask();
    LocalTask.addNewTask();
    }
}
}

export default getFromLocalStorage;