let mitglieder = [
    {
        name: "Smith",
        vorname: "John",
        email: "foo@bar.com"
    },
    {
        name: "Doe",
        vorname: "Jane",
        email: "jane@doe.org"
    },
    {
        name: "Jimmy",
        vorname: "Jimmson",
        email: "jimmy.jimmson@verein.org"
    },
    {
        name: "Olaf",
        vorname: "Olafsons",
        email: "Olaf.Olafson@verein.org"
    }
];

//indexMem dient dazu die Mitglieder aus dem Array auszuwählen
let indexMem = 0;

//zur Darstellung der einzelnen Mitglieder (nicht für die aufgabe relevant)
function showCurrentMember(x) {
    document.getElementById("showMem").innerHTML = `
    <p>Member Index: ${indexMem}</p>
    <p>${mitglieder[x].name}</p>
    <p>${mitglieder[x].vorname}</p>
    <p>${mitglieder[x].email}</p>
    `;
}

document.getElementById("showNextMemBtn").addEventListener("click", function () {
    indexMem++;
    if (indexMem >= mitglieder.length) {
        indexMem = 0;
    }
    showCurrentMember(indexMem);
});

document.getElementById("showPrevMemBtn").addEventListener("click", function () {
    indexMem--;
    if (indexMem < 0) {
        indexMem = mitglieder.length - 1;
    }
    showCurrentMember(indexMem);
});

//Die dynamische Darstellung erfolgt indem ein String durch einen foreach Loop des Arrays die Mitglieder Informationen und html Elemente angefügt werden.
allMemString = `<tr class="allMemRow1">
<td><p>Name</p></td>
<td><p>Vorname</p></td>
<td><p>Email</p></td>
<td><p>Gruppe</p></td>
</tr>`;

//wird in dem erwähnten foreach Loop aufgerufen Backtick `` Schreibweise um Variablen im String aufrufen zu können
//für die css darstellung wird durch die Modolo Operation die Klasse der einzelnen rows berechnet, sodass "allMemRow0" und "allMemRow1" existieren.
//zum differenzieren der einzelnen Buttons wird der Index der einzelnen Array Einträge beigefügt. Dies dient später dazu die entsprechenden Einträge gezielt hinzuzufügen / zu löschen
function showAllMem(x, index, array) {
    allMemString = allMemString + `
        <tr class="allMemRow${index % 2}">
            <td>
                <p>${mitglieder[index].name}</p>
            </td>
            <td>
                <p>${mitglieder[index].vorname}</p>
            </td>
            <td>
                <p>${mitglieder[index].email}</p>
            </td>
            <td>
                <input class="addBtn" id="addMemBtn[${[index]}]" type="button" name="${index}" value="Add" onclick="addToList(${index})">
                <input class="rmBtn" id="rmMemBtn[${[index]}]" type="button" name="${index}" value="Remove" onclick="removeFromList(${index})">
            </td>
        <tr>
    `;
}

document.getElementById("showAllMemBtn").addEventListener("click", function () {
    //foreach Loop des arrays
    mitglieder.forEach(showAllMem)
    //einfügen des Strings auf der HTML Seite
    document.getElementById("showAllMem").innerHTML = allMemString;
    //entfernen des Buttons
    document.getElementById("showAllMemBtn").remove();
});


var elements = document.getElementsByClassName("classname");

var myFunction = function() {
    var attribute = this.getAttribute("data-myattribute");
    alert(attribute);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}



function addToList(index) {
    var myElem = document.getElementById(`participant${index}`);
    if (myElem === null) {
        document.getElementById("participants").innerHTML += `<ul id="participant${index}">${mitglieder[index].name} ${mitglieder[index].vorname}</ul>`;
    }

}

function removeFromList(index) {
    document.getElementById(`participant${index}`).remove();
}
