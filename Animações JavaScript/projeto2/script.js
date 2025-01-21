// Gerar estrelas com posições aleatórias
document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.getElementById('stars');

    // Gerar 100 estrelas
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // A posição horizontal aleatória (0 a 100%)
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        
        // Aplicando as posições
        star.style.left = `${xPos}%`;
        star.style.top = `${yPos}%`;
        
        // Adicionando a estrela ao contêiner
        starsContainer.appendChild(star);
    }
});
