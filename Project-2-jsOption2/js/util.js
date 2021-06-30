
function ChangeNameTask(e) {
    const editInput = e.querySelector('input[type=text]');
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