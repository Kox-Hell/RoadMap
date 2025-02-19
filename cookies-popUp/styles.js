let closeButton = document.querySelector('.button-close');
let likeButton = document.querySelector('.button-like')

document.addEventListener('DOMContentLoaded', function(event) {

    let cookieContainer = document.querySelector('.cookies-container');
    //Pop Up visible o no visible
    closeButton.addEventListener('click', function () {
        if (cookieContainer.classList.contains('visible') ) {
            cookieContainer.classList.remove('visible');
        }
    });
    let consent = localStorage.getItem("cookiesConsent");
    if (!consent) {
        cookieContainer.classList.add('visible');
        console.log('No hay consentimiento');
    }else {
        cookieContainer.classList.remove('visible');
        console.log('Hay Consentimiento');
    }
    //Click en boton I like cookies
    likeButton.addEventListener('click', function () {
        let reset = document.querySelector(".reset");
        cookieContainer.classList.remove('visible');
        localStorage.setItem('cookiesConsent', 'accepted');
        reset.style.display = 'block';
    });
    //Efecto Galleta
    likeButton.addEventListener('mouseenter', function() {
        let cookieIcon = document.getElementById('cookie-icon');
        if (!cookieIcon.classList.contains('rotar')) {
            cookieIcon.classList.add('rotar')
        }else {
            cookieIcon.classList.remove('rotar');
        }
    });
    //Efecto Galleta
    likeButton.addEventListener('mouseleave', function() {
        let cookieIcon = document.getElementById('cookie-icon');
        if (!cookieIcon.classList.contains('rotar')) {
            cookieIcon.classList.add('rotar')
        }else {
            cookieIcon.classList.remove('rotar');
        }
    });
    //Reset de cookies
    let reset = document.querySelector(".reset")
    reset.addEventListener("click", function() {
        localStorage.removeItem("cookiesConsent"); // Elimina el consentimiento guardado
        document.querySelector(".cookies-container").classList.add("visible"); // Muestra el pop-up nuevamente
        console.log("✅ Consentimiento eliminado, pop-up mostrado nuevamente.");
        reset.style.display = 'none';
    });

})


