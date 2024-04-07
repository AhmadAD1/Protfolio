const GRASS_COUNT = 25;
const BALL_COUNT = 6;
const CLASS_BALL = 'pokeball';
const CLASS_BALL1 = 'pokeball1';
const CLASS_GRASS = 'grass';
const CLASS_GRASS1 = 'grass1';
const CLASS_GRASS2 = 'grass2';
const CLASS_GRASS3 = 'grass3';
const PLAYER = document.querySelector('.player');
const PLAYER_SPEED = 3;
const PLAYER_SIZE = 50;
const SOUND = new Audio('sound/coin.mp3');
let count = 0;
let count1 = 0;
const POS_START = {

    x: window.innerWidth / 2,
    y: window.innerHeight / 2,

};


let playerPos = {
    x: 0,
    y: 0
}
let playerVel = {
    x: 0,
    y: 0
}
function startgame() {
    updategrassandball(CLASS_GRASS, GRASS_COUNT);
    updategrassandball(CLASS_GRASS1, GRASS_COUNT);
    updategrassandball(CLASS_GRASS2, GRASS_COUNT);
    updategrassandball(CLASS_GRASS3, GRASS_COUNT);

    updategrassandball(CLASS_BALL, BALL_COUNT);
    updategrassandball(CLASS_BALL1, BALL_COUNT);

    playerPos = POS_START;
}
function update() {
    console.log(playerPos.x, playerPos.y);
    if (playerPos.x < 0) {
        playerPos.x = 0;
    }
    if (playerPos.y < 0) {
        playerPos.y = 0;
    }
    if (playerPos.x > window.innerWidth - PLAYER_SIZE) {
        playerPos.x = window.innerWidth - PLAYER_SIZE;
    }
    if (playerPos.y > window.innerHeight - PLAYER_SIZE) {
        playerPos.y = window.innerHeight - PLAYER_SIZE;
    }
    if (playerPos.x > window.innerWidth) {
        playerPos.x = window.innerWidth;
    }
    if (playerPos.y > window.innerHeight) {
        playerPos.y = window.innerHeight;
    }
    playerPos.x += playerVel.x;
    playerPos.y += playerVel.y;
    PLAYER.style.left = playerPos.x + 'px';
    PLAYER.style.top = playerPos.y + 'px';
    checkCollision();


    console.log('Game updated');
    requestAnimationFrame(update);
}
window.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowUp': {
            playerVel.y = -PLAYER_SPEED;
            PLAYER.style.backgroundImage = "url(./images/player_front.png)";
            PLAYER.classList.add('walk');
            break;
        }
        case 'ArrowDown': {
            playerVel.y = PLAYER_SPEED;
            PLAYER.style.backgroundImage = "url(./images/player_back.png)";
            PLAYER.classList.add('walk');
            break;
        }
        case 'ArrowLeft': {
            playerVel.x = -PLAYER_SPEED;
            PLAYER.style.backgroundImage = "url(./images/player_left.png)";
            PLAYER.classList.add('walk');
            break;
        }
        case 'ArrowRight': {
            playerVel.x = PLAYER_SPEED;
            PLAYER.style.backgroundImage = "url(./images/player_right.png)";
            PLAYER.classList.add('walk');
            break;
        }

    }
});

window.addEventListener('keyup', function (event) {
    PLAYER.classList.remove('walk');
    switch (event.key) {
        case 'ArrowUp':
            playerVel.y = 0;
            break;
        case 'ArrowDown':
            playerVel.y = 0;
            break;
        case 'ArrowLeft':
            playerVel.x = 0;
            break;
        case 'ArrowRight':
            playerVel.x = 0;
            break;
    }
});
function checkCollision() {

    const playerRect = PLAYER.getBoundingClientRect();
    const balls = document.querySelectorAll('.' + CLASS_BALL);
    const balls1 = document.querySelectorAll('.' + CLASS_BALL1);
    balls.forEach(function (ball) {
        const ballRect = ball.getBoundingClientRect();
        if (collision(ball, PLAYER)) {
            ball.style.left = Math.random() * 100 + "%";
            ball.style.top = Math.random() * 100 + "%";
            SOUND.play();
            count++;
            score();

        }
        balls1.forEach(function (ball) {
            if (collision(ball, PLAYER)) {
                ball.style.left = Math.random() * 100 + "%";
                ball.style.top = Math.random() * 100 + "%";
                SOUND.play();
                count++;
                score();

            }
        });
        // if (playerRect.right > ballRect.left &&
        //     playerRect.left < ballRect.right &&
        //     playerRect.bottom > ballRect.top &&
        //     playerRect.top < ballRect.bottom) {
        //     ball.remove();
        //     console.log('Collision2');

        // }

    });
}
function collision($div1, $div2) {
    var x1 = $div1.getBoundingClientRect().left;
    var y1 = $div1.getBoundingClientRect().top;
    var h1 = $div1.clientHeight;
    var w1 = $div1.clientWidth;
    var b1 = y1 + h1;
    var r1 = x1 + w1;

    var x2 = $div2.getBoundingClientRect().left;
    var y2 = $div2.getBoundingClientRect().top;
    var h2 = $div2.clientHeight;
    var w2 = $div2.clientWidth;
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}
function updategrassandball(className, count) {
    for (let i = 0; i < count; i++) {
        const newElement = document.createElement("div");
        newElement.classList.add(className);
        newElement.style.left = Math.random() * 100 + "%";
        newElement.style.top = Math.random() * 100 + "%";
        document.body.appendChild(newElement);
    }
    console.log('Grass updated');
}
function reseteGame() {
    const balls = document.querySelectorAll('.' + CLASS_BALL);
    balls.forEach(function (ball) {
        ball.style.left = Math.random() * 100 + "%";
        ball.style.top = Math.random() * 100 + "%";
    });
    const balls1 = document.querySelectorAll('.' + CLASS_BALL1);
    balls1.forEach(function (ball) {
        ball.style.left = Math.random() * 100 + "%";
        ball.style.top = Math.random() * 100 + "%";
    });
    const grass = document.querySelectorAll('.' + CLASS_GRASS);
    grass.forEach(function (grass) {
        grass.style.left = Math.random() * 100 + "%";
        grass.style.top = Math.random() * 100 + "%";
    });
    const grass1 = document.querySelectorAll('.' + CLASS_GRASS1);
    grass1.forEach(function (grass) {
        grass.style.left = Math.random() * 100 + "%";
        grass.style.top = Math.random() * 100 + "%";
    });
    const grass2 = document.querySelectorAll('.' + CLASS_GRASS2);
    grass2.forEach(function (grass) {
        grass.style.left = Math.random() * 100 + "%";
        grass.style.top = Math.random() * 100 + "%";
    });
    const grass3 = document.querySelectorAll('.' + CLASS_GRASS3);
    grass3.forEach(function (grass) {
        grass.style.left = Math.random() * 100 + "%";
        grass.style.top = Math.random() * 100 + "%";
    });



    playerPos = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    }
    count = 0;
    resetTime();

    score();



}

function score() {
    const score = document.getElementById('score');
    score.innerText = count;

}

function time() {
    const time = document.getElementById('time');

    setInterval(function () {
        count1++;
        time.innerText = count1;
    }, 1000);
}
function resetTime() {
    const time = document.getElementById('time');
    time.innerText = 0;
    count1 = 0;
}

time();



startgame();
update();
