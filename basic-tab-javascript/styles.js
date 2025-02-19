let tabs = document.querySelectorAll('.tab');
let content = document.querySelectorAll('.content-tab-container');

tabs.forEach(function(tab) {
    tab.addEventListener('click', function () {
        tabs.forEach(function(t) {
            t.classList.remove('active');
        });
        content.forEach(function(c) {
            c.classList.remove('active');
        });
        tab.classList.add('active');
        let contentId = tab.id.replace('tab', 'content');
        document.getElementById(contentId).classList.add('active');
    });
});