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
}

let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");

let body = [[]];

document.getElementById("mycanvas").addEventListener("click", function () { 
    let quadrat = new Rechteck(Math.floor(Math.random() * 200), Math.floor(Math.random() * 200), Math.floor(Math.random() * 200), Math.floor(Math.random() * 200), Math.floor(Math.random() * 200), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
    context.fillStyle = `rgb(${quadrat.getR()}, ${quadrat.getG()}, ${quadrat.getB()})`;
    context.fillRect(quadrat.getTop(), quadrat.getLeft(), quadrat.getWidth(), quadrat.getHeight());
    
    body.push([quadrat.getTop(), quadrat.getLeft(), quadrat.getWidth(), quadrat.getHeight(), quadrat.getR(), quadrat.getG(), quadrat.getB()]);
    
});


document.getElementById("cleanCanvas").addEventListener("click", function () {
    context.fillStyle = `rgb(255, 255, 255)`;
    context.fillRect(0, 0, 400, 400); 
});

document.getElementById("restoreCanvas").addEventListener("click", function () {
    body.forEach(e => {
        context.fillStyle = `rgb(${e[4]}, ${e[5]}, ${e[6]})`;
        context.fillRect(e[0], e[1], e[2], e[3]); 
    });
});
