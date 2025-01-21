const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflake() {
    const size = Math.random() * 5 + 2;
    const x = Math.random() * canvas.width;
    const y = -size;
    const speed = Math.random() * 2 + 0.5;
    snowflakes.push({ x, y, size, speed });
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 1;

    snowflakes.forEach(snowflake => {
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        snowflake.y += snowflake.speed;
        if (snowflake.y > canvas.height) {
            snowflake.y = -snowflake.size;
            snowflake.x = Math.random() * canvas.width;
        }
    });
}

function animate() {
    drawSnowflakes();
    createSnowflake();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
