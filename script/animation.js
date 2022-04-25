let circle = document.getElementById('circle');
let posX = 0;
let posY = 0;
let moveLeft = false;
let moveTop = false;
let key;
function start_animation() {
    key = setInterval(move,20);
}
function stop_animation() {
    clearInterval(key);
}

function move() {
    if (posX == 1420) moveLeft = true;
    if (posX == 0) moveLeft = false;
    if (posY == 648) moveTop = true;
    if (posY == 0) moveTop = false;
    if (!moveLeft && !moveTop) {
        posX += 5; posY +=3;
        circle.style.left = posX + 'px';
        circle.style.top = posY + 'px';
    }
    else if (moveLeft && !moveTop) {
        posX -= 5; posY +=3;
        circle.style.left = posX + 'px';
        circle.style.top = posY + 'px';
    }
    else if (!moveLeft && moveTop) {
        posX += 5; posY -=3;
        circle.style.left = posX + 'px';
        circle.style.top = posY + 'px';
    }
    else if (moveLeft && moveTop) {
        posX -= 5; posY -=3;
        circle.style.left = posX + 'px';
        circle.style.top = posY + 'px';
    }
}