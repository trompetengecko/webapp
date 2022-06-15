
const date = new Date();
let day = date.getDay();

document.writeln("<br>")
document.writeln(day)

let weekDayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

document.writeln("<br>")
document.writeln(weekDayArr[day])


function randArr(a, b, n) {
    const intArr = [];
    for (let i = 0; i < n; i++) {
        intArr[i] = Math.random() * (b - a) + a;
    }
    return intArr
}

let newRandArray = randArr(3, 8, 5)

newRandArray.forEach(element => {
    document.writeln(element+"<br>")
});

let value = 0
newRandArray.forEach(funcSum) 

function funcSum (x, index, array) {
    value = value + x;
}

document.writeln("<br>")
document.writeln(value)

function greossteZahl(arr) {
    let currentBigNum = Number.MIN_VALUE
    arr.forEach(x => {if (x > currentBigNum) {currentBigNum = x}})
    return currentBigNum
}

document.writeln("<br>")
document.writeln(greossteZahl(newRandArray))

function arrayIncrement(x, index, array) {
    array[index] = x + 1;
}

function twoDArray(arr) {
    arr.forEach((data) => {
        data.forEach(arrayIncrement)
        }    
    )
}

let testArray = [
    [0, 1],
    [2, 3, 4],
    [5, 6, 7, 8]
];

document.writeln("<br>")
document.writeln(testArray[0][1]+"<br>")

document.writeln("<br>")
testArray.forEach(x => document.writeln(x+"<br>"))

twoDArray(testArray)

document.writeln("<br>")
testArray.forEach(x => document.writeln(x+"<br>"))

document.writeln("<br>")
testArray.forEach((x) => {
        x.forEach(y => {
            document.writeln(y+"<br>")
            }   
        )
    }
)