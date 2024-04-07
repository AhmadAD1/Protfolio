const canvas = document.querySelector('#pong');
const ctx = canvas.getContext('2d');
const PLAYER_HEIGHT = 150;
const PLAYER_WIDTH = 25;
const BALL_SPEED = 1;
const BALL_DELTA_SPEED = 0.2;
const fps = 50;
let paused = false;
const COM_LEVEL = 0.1;
//game objects
const net = {
    x: canvas.width / 2 - 1,
    y: 0,
    width: 2,
    height: 10,
    color: '#000'
}
const player1 = {
    x: 0,
    y: canvas.height / 2 - PLAYER_HEIGHT / 2,
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    color: '#f00',
    score: 0
}
const player2 = {
    x: canvas.width - PLAYER_WIDTH,
    y: canvas.height / 2 - PLAYER_HEIGHT / 2,
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    color: '#00f',
    score: 0
}

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: BALL_SPEED,
    velocityX: 5,
    velocityY: 5,
    color: '#0f0'
}
//functaion to draw the rectangle
function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}
// drawRect(0, 0, canvas.width, canvas.height, 'black');
function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}
// drawCircle(100, 100, 50, 'white');
function drawText(text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = '45px fantasy';
    ctx.fillText(text, x, y);
}

//drawtext('Hello World', 300, 200, 'white');
function drawNet() {
    for (let i = 0; i <= canvas.height; i += 15) {
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}
//redraw the canvas

function render() {
    drawRect(0, 0, canvas.width, canvas.height, '#fff');
    // drawText('0', 300, 200, 'white');
    drawNet();
    drawText(player1.score, canvas.width / 4, canvas.height / 5, '#000');
    drawText(player2.score, 3 * canvas.width / 4, canvas.height / 5, '#000');
    drawRect(player1.x, player1.y, player1.width, player1.height, player1.color);
    drawRect(player2.x, player2.y, player2.width, player2.height, player2.color);
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
}
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speed = BALL_SPEED;
    ball.velocityX = -ball.velocityX;
}
canvas.addEventListener("mousemove", (e) => {
    if (paused) return;

    let rect = canvas.getBoundingClientRect();

    player1.y = e.clientY - rect.top - player1.height / 2;
});

function lerp(a, b, t) {
    return a + (b - a) * t; // t=0 (a) , t=1 (b)
} canvas.addEventListener("mousemove", (e) => {
    if (paused) return;

    let rect = canvas.getBoundingClientRect();

    player1.y = e.clientY - rect.top - player1.height / 2;
});

function lerp(a, b, t) {
    return a + (b - a) * t; // t=0 (a) , t=1 (b)
}
function collision(b, p) {
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    return (
        b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom
    );
}
function update() {

    if (paused) return;

    // ball movement
    ball.x += ball.velocityX * ball.speed;
    ball.y += ball.velocityY * ball.speed;

    // ball collision with Top & Bottom borders
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.velocityY = -ball.velocityY;
    }

    // ball collision with players
    // Which player??
    let selectedPlayer = ball.x < canvas.width / 2 ? player1 : player2;
    if (collision(ball, selectedPlayer)) {
        ball.velocityX = -ball.velocityX;

        // every time ball hits a player, we increase its speed
        ball.speed += BALL_DELTA_SPEED;
    }

    // PLAYER2 Movement (simple AI)
    let targetPos = ball.y - player2.height / 2;
    let currentPos = player2.y;
    player2.y = lerp(currentPos, targetPos, COM_LEVEL);

    // Update Score
    if (ball.x - ball.radius < 0) {
        // increase player2 score
        player2.score++;
        resetBall();
    } else if (ball.x + ball.radius > canvas.width) {
        // increase player score
        player1.score++;
        resetBall();
    }
}


//game init
function game() {
    update();
    render();

}
//loop

setInterval(game, 1000 / fps);
const pause = document.querySelector('#pause');
pause.addEventListener('click', () => {
    paused = !paused;
    if (paused) {
        pause.innerHTML = 'Resume';
    } else {
        pause.innerHTML = 'Pause';
    }
});
function toProject() {
    var img = document.getElementById("logo");
    img.addEventListener('click', function () {
        // Navigate to another page
        window.location.href = '../../index.html';
    });
}
toProject();
