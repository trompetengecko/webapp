//document.getElementById("BMI-Button").onclick = calcBMI;
const button = document.getElementById("BMI-Button");
button.addEventListener("click", function() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    document.getElementById("BMI-Output").innerHTML = weight / Math.pow(height, 2);
},false)

const submitButton = document.getElementById("submit");

let weightRegExp = new RegExp("/d{2,3}[.]?/d{0,2}");
let heightRegExp = new RegExp("/d{1}[.]?/d{0,2}");
//let nameRegExp = new RegExp("^[A-ü ]+$");
let emailRegExp = new RegExp("^[A-ü@.]+$");
let passwordRegExp = new RegExp("^[A-ü 0-9]+$");

submitButton.addEventListener("click", function() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email.match(emailRegExp) && password.match(passwordRegExp)) {
        document.getElementById("BMI-Output").innerHTML = email+password;
        document.myform.submit();
    } else {
        document.getElementById("BMI-Output").innerHTML = "Failure: Check RegExp";
    }
},false)
