
const arr = [1, 2, 3, 4, 5]
let result = arr.map(function(x) {return x + 1})

let result2 = arr.filter((x) => {return x < 3})

i = 4;

arr.forEach(arrayIncrement)

function arrayIncrement(x, index, array) {
    array[index] = x + 1;
}
arr.forEach(x => console.log(x))

//arr.forEach(element => arr[index] = element)

arr.forEach(x => console.log(x))

setTimeout(() => {console.log("Hallo")}, 500)