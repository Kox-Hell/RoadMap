let tabs = document.querySelectorAll('.tab');
let content = document.querySelectorAll('.content-tab-container');

tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        // Remover 'active' de todos los tabs y contenidos
        tabs.forEach(function (t) {
            t.classList.remove('active');
        });
        content.forEach(function (c) {
            c.classList.remove('active');
        });

        // Agregar 'active' solo al tab clickeado
        tab.classList.add('active');

        // Obtener el id del contenido relacionado y activarlo
        let contentId = tab.id.replace('tab', 'content'); // Convierte "tab-1" en "content-1"
        document.getElementById(contentId).classList.add('active');
    });
});
