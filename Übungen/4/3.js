"use strict";

function calc(x, y) {
    return x + y;
}

document.writeln(calc(2, 5))

document.writeln("<br>")
document.writeln(calc("Hello","World"))

function summe(n) {
    if (n == 0) {
        return 0;
    } else {
        return summe(n-1) + n
    }
}
document.writeln("<br>")
document.writeln(summe(4))

function fakRek(n) {
    if (n == 0) {
        return 1;
    } else {
        return fakRek(n-1) * n;
    }
}
document.writeln("<br>")
document.writeln(fakRek(4))

function fakIt(n) {
    if (n == 0) {
        return 1;
    }
    let fakValue = 1
    for (let i = 1; i <= n; i++) {
        fakValue = fakValue * i
    }
    return fakValue;
}

document.writeln("<br>")
document.writeln(fakIt(4))

function patter(numLines) {
    for (let i = 1; i <= numLines; i++) {
        let xString = "";
        for (let k = 0; k < numLines - i; k++) {
            xString = xString + " "
        }
        for (let j = 1; j <= i*2-1; j++) {
            xString = xString + "x"
        }
        document.writeln(xString)
    }

}

document.writeln("<pre>")
patter(4)
document.writeln("</pre>")