const tempInput = document.querySelector('.temp-input');
const fromButton = document.querySelector('.from-button');
const toButton = document.querySelector('.to-button');
const convertButton = document.querySelector('.convert-button');
const listContainer = document.querySelector('.list-container');

activeButton = null;

//Variables Globales para el Conversor
let x = undefined;
let z = undefined;
let c = document.getElementById('celsius');
let f = document.getElementById('fahrenheit');
let k = document.getElementById('kelvin');
let selectedUnit = null;
let fromID = null;
let toID = null;

let tempConverted = null;

// Función para actualizar la unidad seleccionada en el botón "From"
function updateSelectedUnitFrom(event) {
    fromID = event.target.id; // Guardar el ID de la opción clickeada
    fromButton.textContent = event.target.textContent; // Actualizar el texto del botón
    console.log("Unidad seleccionada FROM:", fromID);
}

// Función para actualizar la unidad seleccionada en el botón "To"
function updateSelectedUnitTo(event) {
    toID = event.target.id; // Guardar el ID de la opción clickeada
    toButton.textContent = event.target.textContent; // Actualizar el texto del botón
    console.log("Unidad seleccionada TO:", toID);
}

// Función para manejar la apertura del selector de unidades
function showLiUnitList() {
    document.addEventListener("click", function (event) {
        let y = event.target;
        if (y) {
            tempInputEffect();
            activateTempInput();

            if (y.id === "from") {
                activeButton = fromButton;
                listContainer.classList.remove("to");
                listContainer.classList.add("from");
            } else if (y.id === "to") {
                activeButton = toButton;
                listContainer.classList.remove("from");
                listContainer.classList.add("to");
            } else {
                listContainer.classList.remove("from", "to");
            }
        }
    });
}
showLiUnitList();

//Funcion para activar tempInput
function activateTempInput() {
    if (fromButton.textContent !== 'From Unit') {
        tempInput.disabled = false;
    }
}

//Funcion efecto en tempInput
function tempInputEffect() {
    if (tempInput.disabled === false) {
        tempInput.classList.add('glow');
    }else {
        tempInput.classList.remove('glow');
    }
}

// Función para manejar la selección de unidades correctamente
function unitSelection() {
    let unitList = document.querySelectorAll(".list-container li");
    unitList.forEach(function (unit) {
        unit.addEventListener("click", function (event) {
            activateConvertButton();
            if (listContainer.classList.contains("from")) {
                updateSelectedUnitFrom(event);
            } else if (listContainer.classList.contains("to")) {
                updateSelectedUnitTo(event);
            }
            // Ocultar la lista después de seleccionar
            listContainer.classList.remove("from", "to");
        });
    });
}

// Llamar a la función para asignar los eventos una sola vez
unitSelection();
//Funcion para activar To Button
function activateToButton() {
    if (tempInput.value.trim() !== '') {
        toButton.disabled = false;
    }
}
tempInput.addEventListener('input', activateToButton);

//Funcion para activar ConvertButton
function activateConvertButton() {
    if (!tempInput.disabled && !toButton.disabled) {
        convertButton.disabled = false;
    }else {
    }
}

// Función para manejar la rotación de los íconos
function toggleIconRotation() {
    document.addEventListener("click", function (event) {
        const target = event.target;
        const isFromButton = target.id === "from";
        const isToButton = target.id === "to";
        if (isFromButton || isToButton) {
            tempInputEffect();
            activateTempInput();
            activeButton = isFromButton ? fromButton : toButton;
            listContainer.classList.toggle("from", isFromButton);
            listContainer.classList.toggle("to", isToButton);
            iconFrom.classList.toggle("rotate", isFromButton);
            iconTo.classList.toggle("rotate", isToButton);
        } else {
            listContainer.classList.remove("from", "to");
            iconFrom.classList.remove("rotate");
            iconTo.classList.remove("rotate");
        }
    });
}
toggleIconRotation();

convertButton.addEventListener('click', function () {
    tempConverter();
    let result = document.querySelector('.result-container');
    result.classList.add('active');
    showResult();
    console.log('From:', fromID);
    console.log('To:', toID);
});

//Funcion para convertir
function tempConverter() {
        let v = tempInput.value.trim();
        let tempNumber = parseFloat(v);
        if (fromID === 'celsius' && toID === 'fahrenheit') {
            tempConverted = tempNumber * 9/5 + 32;
        } else if (fromID === 'fahrenheit' && toID === 'celsius') {
            tempConverted = (tempNumber - 32) * 5/9;
        } else if (fromID === 'celsius' && toID === 'kelvin') {
            tempConverted = tempNumber + 273.15;
        } else if (fromID === 'kelvin' && toID === 'celsius') {
            tempConverted === tempNumber - 273.15;
        } else if (fromID === 'fahrenheit' && toID === 'kelvin') {
            tempConverted = (tempNumber - 32) * 5/9 + 273.15;
        } else if (fromID === 'kelvin' && toID === 'fahrenheit') {
            tempConverted = (tempNumber - 273.15) * 9/5 + 32;
        }
}

//Funcion para mostrar el resultado
function showResult() {
    let v = tempInput.value.trim();
    let tempNumber = parseFloat(v);
    let result = document.querySelector('.result-container');
    result.textContent = `${tempNumber.toFixed(2)} ${fromID.charAt(0).toUpperCase() + fromID.slice(1)} is ${tempConverted.toFixed(2)} ${toID.charAt(0).toUpperCase() + toID.slice(1)}`;
}




