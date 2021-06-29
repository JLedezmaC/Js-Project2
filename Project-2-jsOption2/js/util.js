
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

function editTask(buttonEdit, li) {
    buttonEdit.addEventListener('click', (e) => {
        const especificTask = li;
        if (e.target.tagName === 'IMG') {
        if (e.target.parentElement.classList.contains('edit')) {
            ChangeNameTask(especificTask);
        }
        }
    });
}

function deleteTask(buttonDelete, li) {
    buttonDelete.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            if (e.target.parentElement.classList.contains('delete')) {
                li.remove();
            }
        }
    });
}



function deleteAllTasks() {
    const deleteAll = document.querySelector('.deleteAll h4');
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

export{
    editTask,
    deleteTask,
    deleteAllTasks,
}