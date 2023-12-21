
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('preloader').style.display = 'none';
            document.getElementById('main-content').classList.remove('hidden');
        }, 2000); // 2000 milisegundos = 2 segundos
    });

