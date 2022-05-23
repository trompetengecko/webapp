document.getElementById("BMI-Button").onclick = calcBMI;

function calcBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    document.getElementById("BMI-Output").innerHTML = weight / Math.pow(height, 2);
    //window.alert(weight / Math.pow(height, 2));
}