// Calculadora script
document.addEventListener("DOMContentLoaded", function () {
    // tentar selecionar todos os botões de incremento/soma e decrementoo/subtracao
    const buttons = document.querySelectorAll("#calc .calcBox #contador button");
    
    // evento de click
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Se for pra somar
            if (button.textContent === "+") {
                incrementarContador(button);
            }
            // Se fora pra subtrair
            else if (button.textContent === "-") {
                decrementarContador(button);
            }
        });
    });

    // Função para botar o contador
    function incrementarContador(button) {
        const pElement = button.closest(".calcBox").querySelector("p");
        const contadorAtual = parseInt(pElement.textContent, 10);
        pElement.textContent = contadorAtual + 1;
    }

    // Função para decrementar o contador
    function decrementarContador(button) {
        const pElement = button.closest(".calcBox").querySelector("p");
        const contadorAtual = parseInt(pElement.textContent, 10);
        if (contadorAtual > 0) {
            pElement.textContent = contadorAtual - 1;
        }
    }
});



