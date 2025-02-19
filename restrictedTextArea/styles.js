let input = document.getElementById('input');
let counter = document.querySelector('.counter');
let count = 0;

input.addEventListener('input', function() {
    if (input.value.length >= 250) {
        input.value = input.value.slice(0, 250);
        input.classList.add('error');
        counter.classList.add('error');
    }else {
        input.classList.remove('error');
        counter.classList.remove('error');
    }
    let counterLength = input.value.length;
    let currentCounter = `${counterLength}/250`;
    counter.textContent = currentCounter;
    let currentCounterNumber = parseFloat(currentCounter);
    
});