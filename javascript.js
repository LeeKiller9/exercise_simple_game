let myCanvas = document.querySelector("canvas");
let ctx = myCanvas.getContext("2d");

myCanvas.height = 850;
myCanvas.width = 600;

const sprites = new Image();
sprites.src = 'Untitled.png';

const totoro = {
    speed: 20,
    sX: 530,
    sY: 100,
    sW: 270,
    sH: 410,
    cX: 0,
    cY: 0,
    cW: 150,
    cH: 200,
    isMovingLeft: false,
    isMovingRight: false,
    isMovingUp: false,
    isMovingDown: false,
    drawObj: function () {
        ctx.beginPath();
        ctx.drawImage(sprites, this.sX, this.sY, this.sW, this.sH, this.cX, this.cY, this.cW, this.cH);
    }
}

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 37) {
        totoro.isMovingLeft = false;
    } else if (event.keyCode === 38) {
        totoro.isMovingUp = false;
    } else if (event.keyCode === 39) {
        totoro.isMovingRight = false;
    } else if (event.keyCode === 40) {
        totoro.isMovingDown = false;
    }
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
        totoro.isMovingLeft = true;
    } else if (event.keyCode === 38) {
        totoro.isMovingUp = true;
    } else if (event.keyCode === 39) {
        totoro.isMovingRight = true;
    } else if (event.keyCode === 40) {
        totoro.isMovingDown = true;
    }
});

function animate() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    totoro.drawObj();
    if (totoro.isMovingLeft) {
        totoro.cX -= totoro.speed;
    } else if (totoro.isMovingRight) {
        totoro.cX += totoro.speed;
    } else if (totoro.isMovingUp) {
        totoro.cY -= totoro.speed;
    } else if (totoro.isMovingDown) {
        totoro.cY += totoro.speed;
    }
    if (totoro.cX < 0) {
        totoro.cX = 0;
    } else if (totoro.cX > myCanvas.width - totoro.cW) {
        totoro.cX = myCanvas.width - totoro.cW;
    } else if (totoro.cY < 0) {
        totoro.cY = 0;
    } else if (totoro.cY > myCanvas.height - totoro.cH) {
        totoro.cY = myCanvas.height - totoro.cH;
    }
    requestAnimationFrame(animate);
}

animate();