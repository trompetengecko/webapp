class Rechteck {
    constructor(top, left, width, height, red, green, blue) {
        this._top = top;
        this._left = left;
        this._width = width;
        this._height = height;
        this._r = red;
        this._g = green;
        this._b = blue;
    }
    //getter functions
    getTop = function() {
        return this._top;
    }
    getLeft = function() {
        return this._left;
    }
    getWidth = function() {
        return this._width;
    }
    getHeight = function() {
        return this._height;
    }
    getR = function() {
        return this._r;
    }
    getG = function() {
        return this._g;
    }
    getB = function() {
        return this._b;
    }

    draw = function (top, left, width, height, red, green, blue) {
        context.fillStyle = `rgb(${red}, ${green}, ${blue})`;
        context.fillRect(top, left, width, height);
    }
}
let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");

let bodyArr = [[]];

document.getElementById("mycanvas").addEventListener("click", function () { 
    let randBody = Math.floor(Math.random() * 2); //0 = Rechteck; 1 = Kreis
    let randXDirection = Math.floor(Math.random() * 2) // 0 = nach links; 1 = nach rechts
    let randYDirection = Math.floor(Math.random() * 2) // 0 = nach oben; 1 = nach unten
    let xInverse = 0;
    let yInverse = 0;
    let mouseX = event.clientX - 9; // Gets Mouse X - 9, damit die box an der Mausspitze entsteht
    let mouseY = event.clientY - 8; // Gets Mouse Y - 8, damit die box an der Mausspitze entsteht
    let height = Math.floor(Math.random() * 200);
    let width = Math.floor(Math.random() * 200);
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    //height und width werden mit Inverse multipliziert (-1, 1) um die Richtung zu drehen.
    if ( randXDirection == 0) {
        xInverse = -1;
    } else {
        xInverse = 1;
    }
    if ( randYDirection == 0) {
        yInverse = -1;
    } else {
        yInverse = 1;
    }

    let geometricBody = new Rechteck(mouseX, mouseY, yInverse * height, xInverse * width, red, green, blue); //height und width werden mit Inverse multipliziert (-1, 1) um die Richtung zu drehen.

    geometricBody.draw(geometricBody.getTop(), geometricBody.getLeft(), geometricBody.getWidth(), geometricBody.getHeight(), geometricBody.getR(), geometricBody.getG(),geometricBody.getB());
    bodyArr.push([geometricBody.getTop(), geometricBody.getLeft(), geometricBody.getWidth(), geometricBody.getHeight(), geometricBody.getR(), geometricBody.getG(), geometricBody.getB()]);
});

document.getElementById("cleanCanvas").addEventListener("click", function () {
    context.fillStyle = `rgb(255, 255, 255)`;
    context.fillRect(0, 0, 400, 400); //x-y Dimension des Canvas
});

document.getElementById("restoreCanvas").addEventListener("click", function () {
    bodyArr.forEach(e => {
        geometricBody.draw(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
    });
});
