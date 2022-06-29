class Figur {
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

    draw = function (context) {
        context.fillStyle = `rgb(${this._r}, ${this._g}, ${this._b})`;
        context.fillRect(this._top, this._left, this._width, this._height);
    }
}

class Rechteck extends Figur{
    constructor(top, left, width, height, red, green, blue) {
        super(top, left, width, height, red, green, blue);
    }
}

class Kreis extends Figur{
    constructor(top, left, width, height, red, green, blue) {
        super(top, left, width, height, red, green, blue);
        this._top = top;
        this._left = left;
        this._radius = width;
        this._height = height;
        this._r = red;
        this._g = green;
        this._b = blue;
    }

    draw = function () {
        context.fillStyle = `rgb(${this._r}, ${this._g}, ${this._b})`;
        context.arc(this._top, this._left, this._width, 0, 2 * Math.PI,true);
        context.fill();
        context = canvas.getContext("2d");
    }
}

let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");

let bodyArr = [];

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

    if (randBody == 0) {
        let geometricBody = new Rechteck(mouseX, mouseY, yInverse * height, xInverse * width, red, green, blue); //height und width werden mit Inverse multipliziert (-1, 1) um die Richtung zu drehen.
        geometricBody.draw(context);
        bodyArr.push(geometricBody);
    } else {
        let geometricBody = new Kreis(mouseX, mouseY, height, width, red, green, blue); //height und width werden mit Inverse multipliziert (-1, 1) um die Richtung zu drehen.
        geometricBody.draw(context);
        bodyArr.push(geometricBody);
    }

});

document.getElementById("cleanCanvas").addEventListener("click", function () {
    context.fillStyle = `rgb(255, 255, 255)`;
    context.fillRect(0, 0, 400, 400); //x-y Dimension des Canvas
});

document.getElementById("restoreCanvas").addEventListener("click", function () {
    bodyArr.forEach(figur => {
        figur.draw(context)
    });
});
