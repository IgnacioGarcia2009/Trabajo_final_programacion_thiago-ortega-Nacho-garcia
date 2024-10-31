const logros = [
    "8 Balones de Oro",
    "4 Champions League",
    "10 Ligas Españolas",
    "3 Supercopas de Europa",
    "2 Copa América",
    "1 Mundial de Clubes",
    "1 mundial"
];

// Condición
if (logros.length > 0) {
    const logrosList = document.getElementById('logros-list');

    // Repetición
    for (let i = 0; i < logros.length; i++) {
        const li = document.createElement('li');
        li.textContent = logros[i];
        logrosList.appendChild(li);
    }
}

// Manipulación del DOM
document.getElementById('intro').addEventListener('click', function() {
    alert('¡Lionel Messi es un ícono del fútbol!');
});

let index = 0;

function mostrarImagen() {
    const imagenes = document.querySelector('.imagenes');
    const total = imagenes.children.length;
    if (index >= total) {
        index = 0;
    }
    const offset = -index * 100; // Cambia 100 por el ancho de tus imágenes en porcentaje
    imagenes.style.transform = `translateX(${offset}%)`;
}

function cambiarImagen() {
    index++;
    mostrarImagen();
}

// Cambia la imagen cada 5 segundos
setInterval(cambiarImagen, 5000);

// Iniciar mostrando la primera imagen
mostrarImagen();