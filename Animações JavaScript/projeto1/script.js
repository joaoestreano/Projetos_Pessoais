const starsContainer = document.getElementById('stars');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;  // Posição horizontal aleatória
    star.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duração aleatória da animação (de 3 a 5 segundos)
    star.style.animationDelay = `${Math.random() * 2}s`; // Delay aleatório de início da animação

    starsContainer.appendChild(star);
}

// Gerar um número de estrelas aleatórias (por exemplo, 100 estrelas)
for (let i = 0; i < 100; i++) {
    createStar();
}
