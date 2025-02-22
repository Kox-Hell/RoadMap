//Variables Globales
let taskCounter = localStorage.getItem('taskCounter');

// Recuperar taskCounter desde localStorage o contar los checkboxes existentes
if (taskCounter === null) {
    taskCounter = document.querySelectorAll('.check-box').length;
} else {
    taskCounter = parseInt(taskCounter);
}
document.addEventListener('DOMContentLoaded', function () {

//Funcion para crear una tarea nueva
function createTask () {
    let newTaskText = input.value.trim();//Contenido de Input

    let taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    let taskContentContainer = document.createElement('div');
    taskContentContainer.classList.add('task-content-container');

    let newCheckBox = document.createElement('input');
    newCheckBox.classList.add('check-box');
    newCheckBox.type = 'checkbox';
    newCheckBox.id = 'task-' + taskCounter;

    let label = document.createElement('label');
    label.setAttribute('for', 'task-' + taskCounter)
    label.textContent = newTaskText; //Crear esta variable con el contenido de input

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');

    let deleteIcon = document.createElement('img');
    deleteIcon.src = "assets/icons8-bin-24.png";
    deleteIcon.classList.add('icon');

    let hr = document.createElement('hr');

    deleteButton.appendChild(deleteIcon);
    buttonContainer.appendChild(deleteButton);
    taskContentContainer.appendChild(newCheckBox);
    taskContentContainer.appendChild(label);
    taskContainer.appendChild(taskContentContainer);
    taskContainer.appendChild(buttonContainer);
    taskContainer.appendChild(hr);

    taskCounter++;//Incrementa +1 el resultado de taskCounter despues de crear una tarea
    return taskContainer;
}

let buttonEnter = document.querySelector('.enter-button');
let input = document.querySelector('.input');
let errorMessage = document.querySelector('.error-message');


//Funcion agregar la nueva tarea ala lista
function addTask() {
    let allTaskContainer = document.querySelector('.all-tasks-container');
    allTaskContainer.prepend(createTask());
    console.log('New task ID:',taskCounter);
}
// Evento para tecla "Enter"
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        if (input.value.trim() !== '') {
            addTask();
            input.value = '';
        }else {
            input.classList.add('error');
            errorMessage.style.opacity = '1'
        }
    }
});

// Evento para clic en el botón
buttonEnter.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        addTask();
        input.value = '';
    }else {
        input.classList.add('error');
        errorMessage.style.opacity = '1'
    }
});

//Evento para quitar error si se detecta contenido en input
input.addEventListener('input', function () {
    if (input.classList.contains('error')) {
        input.classList.remove('error')
        errorMessage.style.opacity = '0';
    }
})

document.addEventListener("click", function(event) {//Se hace en document para que no importe si fue un elemento creado despues de que DOM cargo
    let target = event.target.closest('.delete-button');
    if (target) {//Verifica si si se dio click en el boton o en la imagen del boton(closest)
        let taskContainer = target.closest('.task-container');
        if (taskContainer) {//Verifica si encontro el contenedor .task-container
            taskContainer.remove();
            console.log('Deleted Task ID:', taskContainer.querySelector('.check-box').id);
        }
    }
});

//Funcion para tachar tarea y mandar al final
document.addEventListener('click', function(event) {
    let target = event.target.closest('.check-box');
    if (target) {
        let checkedBox = target.closest("input[type='checkbox']");
        let taskContainer = target.closest('.task-container');
        if (checkedBox.checked) {
            let allTaskContainer = document.querySelector('.all-tasks-container');
            allTaskContainer.appendChild(taskContainer);
            console.log('Task completed ID:', checkedBox.id);
        }else {
            let allTaskContainer = document.querySelector('.all-tasks-container');
            let taskContainer = target.closest('.task-container');
            console.log('Is not checked', checkedBox.id);
            allTaskContainer.prepend(taskContainer);
        }
    }
})



});//Fin de DOMContentLoaded

