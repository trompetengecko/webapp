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


//json Darstellung (nicht Aufgabenrelevant und nur eine Übung)
fetch('database.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
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
//Ende der json Darstellung

document.getElementById("ajaxtBtn").addEventListener("click", function () {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
        var ajaxBMI = this.responseText;
        console.log(ajaxBMI);
        document.getElementById("BMI-Output").innerHTML = ajaxBMI;
        }
    }
    xhttp.open("GET", `https://vulcan.informatik.hs-fulda.de/bmiRechnerAjax.php?gewicht=${document.getElementById('weight').value}&groesse=${document.getElementById('height').value}`, true);
    xhttp.send();
});

