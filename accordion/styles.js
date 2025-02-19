let buttons = document.querySelectorAll('.button-deploy');

buttons.forEach(function (singleButton) {
    singleButton.addEventListener('click', function() {
        let buttonId = singleButton.dataset.questionId;
        let answer = document.querySelector(`.answer-container[data-question-id='${buttonId}']`);

        if (answer) {
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            }else {
                answer.style.display = 'block';
            }
        }
    })
})

//declaro variable buttons para todos los botones
//loop buttons
//eventlistener singleButton
//declaro vriables para el boton que tenga dataset
//declaro variable para answer con dataquestion y $
//if para verificar que exista answer
//display none y block para answer