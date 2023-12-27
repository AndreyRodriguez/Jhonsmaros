document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('main').style.display = 'block';
    }, 1000); // 2000 milisegundos = 2 segundos
});
