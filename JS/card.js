document.getElementById('comencemos').addEventListener('click', function() {
        window.open('https://wa.me/573116384803?text=Hola%20', '_blank');
    });

const contenedor = document.querySelector('.container');

contenedor.addEventListener('click', (event) => {

    const elemento = event.target;
    if (elemento.classList.contains('button-card')) {
    location.href = './contact.html';
    }
});
    