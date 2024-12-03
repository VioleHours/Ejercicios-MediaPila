const h2 = document.querySelector('h2');
const actualizar = document.querySelector('button');

function obtenerChiste() {
    $.getJSON("https://api.chucknorris.io/jokes/random", (data) => {
        h2.textContent = data.value;
    });
}

obtenerChiste();

actualizar.addEventListener('click', obtenerChiste);
