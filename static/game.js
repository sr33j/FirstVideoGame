document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let player = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        width: 50,
        height: 50,
        color: 'blue'
    };

    function drawPlayer() {
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);
    }

    function clearCanvas() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function gameLoop() {
        clearCanvas();
        drawPlayer();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    window.addEventListener('keydown', (event) => {
        const speed = 5;
        switch (event.key) {
            case 'ArrowUp':
                player.y -= speed;
                break;
            case 'ArrowDown':
                player.y += speed;
                break;
            case 'ArrowLeft':
                player.x -= speed;
                break;
            case 'ArrowRight':
                player.x += speed;
                break;
        }
    });
});