//document.getElementById("BMI-Button").onclick = calcBMI;
const button = document.getElementById("BMI-Button");
button.addEventListener("click", function () {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    document.getElementById("BMI-Output").innerHTML = weight / Math.pow(height, 2);
}, false)

const submitButton = document.getElementById("submitBtn");

let weightRegExp = new RegExp("/d{2,3}[.]?/d{0,2}");
let heightRegExp = new RegExp("/d{1}[.]?/d{0,2}");
//let nameRegExp = new RegExp("^[A-ü ]+$");
let emailRegExp = new RegExp("^[A-ü@.]+$");
let passwordRegExp = new RegExp("^[A-ü 0-9]+$");

submitButton.addEventListener("click", function () {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email.match(emailRegExp) && password.match(passwordRegExp)) {
        document.getElementById("BMI-Output").innerHTML = email + password;
        document.getElementById("myForm").submit();
    } else {
        document.getElementById("BMI-Output").innerHTML = "Failure: Check RegExp";
    }
}, false)

fetch('database.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
        console.log("hi");
    })
    .catch(function (err) {
        console.log("json error");
    });

function appendData(data) {
    var mainContainer = document.getElementById("userData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 
        'Weight: ' + data[i].weight + '<br> ' + 
        'Height: ' + data[i].height + '<br> ' +
        'Gender: ' + data[i].gender + '<br> ' +
        'Name: ' + data[i].name + '<br> ' +
        'Email: ' + data[i].email + '<br> ' +
        'Comment: ' + data[i].comment + '<br><br> '
        ;
        mainContainer.appendChild(div);
        console.log(i);
    }
}


//document.getElementById("userData").innerHTML +="hi";
