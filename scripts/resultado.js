document.addEventListener("DOMContentLoaded", function () {
    //botão de calcular
    const calcularButton = document.getElementById("calcular");

    //evento de clique ao botão de calcular
    calcularButton.addEventListener("click", function () {
        // Obtenha os valores dos contadores
        const homens = parseInt(document.getElementById("homens").querySelector("p").textContent, 10);
        const mulheres = parseInt(document.getElementById("mulheres").querySelector("p").textContent, 10);
        const criancas = parseInt(document.getElementById("criancas").querySelector("p").textContent, 10);
        const seBebem = parseInt(document.getElementById("seBebem").querySelector("p").textContent, 10);

        //quantidade necessária de cada item
        const carne = 0.4 * homens + 0.32 * mulheres + 0.2 * criancas;
        const paoDeAlho = 2 * seBebem + criancas;
        const carvao = 1 * (homens + mulheres + criancas + seBebem);
        const sal = 0.04 * (homens + mulheres + criancas + seBebem);
        const gelo = Math.ceil((homens + mulheres + criancas + seBebem) / 10) * 5;
        const refrigerante = Math.ceil((homens + mulheres + criancas + seBebem) / 5);
        const agua = Math.ceil((homens + mulheres + criancas + seBebem) / 5);
        const cerveja = 3 * seBebem;

        //exibição, aqui a cobra fumou
        //funciona console.log? Sim, apareceu
        console.log("Carne: " + carne.toFixed(2) + " KG");
        console.log("Pão de Alho: " + paoDeAlho);
        console.log("Carvão: " + carvao + " KG");
        console.log("Sal: " + sal.toFixed(2) + " KG");
        console.log("Gelo: " + gelo + " KG");
        console.log("Refrigerante: " + refrigerante + " garrafas de 2L");
        console.log("Água: " + agua + " garrafas de 1L");
        console.log("Cerveja: " + cerveja + " garrafas de 600ml"); 
    });

});
