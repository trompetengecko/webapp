//document.getElementById("BMI-Button").onclick = calcBMI;
const button = document.getElementById("BMI-Button");
button.addEventListener("click", function() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    document.getElementById("BMI-Output").innerHTML = weight / Math.pow(height, 2);
},false)