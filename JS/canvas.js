
$("#StartButton").click(function () {
    $("#SplashScreen").hide();
    $("#myCanvas").show();
});

// Toute les données pour les dessins, taille hauteur padding etc...
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width  = 480;
canvas.height = 320; 
var ballRadius = 9;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 1;


// Ajout des briques

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

// Mouvement de la souris
document.addEventListener("mousemove", sourisMouvement, false);
function sourisMouvement(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
    }
}

// Detection des collisions, et de victoire

function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
        var b = bricks[c][r];
        if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
            dy = -dy;
            b.status = 0;
            score++;
            if(score == brickRowCount*brickColumnCount) {
            alert("Victoire")
            document.location.reload();
            }
        }
        }
    }
    }
}

// Dessin de la balle
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "rgb(71, 66, 153)";
    ctx.fill();
    ctx.closePath();
}

// Dessin du paddle
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "rgb(71, 66, 153)";
    ctx.fill();
    ctx.closePath();
}

// Dessin des deux colonnes de briques
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
        if(bricks[c][r].status == 1) {
        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "rgb(71, 66, 153)";
        ctx.fill();
        ctx.closePath();
        }
    }
    }
}

// Affichage du score en focntione des briques cassés

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Score: "+score, 8, 20);
}

// Affichage du nombre de vie
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Vie: "+lives, canvas.width-65, 20);
}

// Dessin final

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
    }
    if(y + dy < ballRadius) {
    dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
    }
    else {
        --lives;
        // Affichage si la balle est tombé hors du paddle
        if(!lives) {
            document.location.reload();
        }
        else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 1;
        dy = 1;
        paddleX = (canvas.width-paddleWidth)/2;
        }
    }
    }
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

draw();
