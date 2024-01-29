//darkmode
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle');
    const body = document.body;
    const darkModeState = localStorage.getItem('darkMode') === 'true';

    aplicarDarkMode(darkModeState);

    function aplicarDarkMode(estado) {
        toggleButton.classList.toggle('active', estado);
        body.classList.toggle('active', estado);
    }

    toggleButton.addEventListener('click', function() {
        const novoEstado = !body.classList.contains('active');
        aplicarDarkMode(novoEstado);
        localStorage.setItem('darkMode', novoEstado);
    })

    
});


