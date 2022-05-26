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
                <input class="addBtn" id="addMemBtn[${[index]}]" type="button" value="Add">
                <input class="rmBtn" id="rmMemBtn[${[index]}]" type="button" value="Remove">
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

    //Event Listener an die dynamisch erstellten Buttons anhängen
    const addBtn = document.querySelectorAll(".addBtn");
    for (let i = 0; i < addBtn.length; i++) {
        addBtn[i].addEventListener("click", function () {
            console.log("Added Index: " + i);
            addToList(i);
        });
    }

    const rmBtn = document.querySelectorAll(".rmBtn");
    for (let i = 0; i < rmBtn.length; i++) {
        rmBtn[i].addEventListener("click", function () {
            console.log("Removed Index: " + i);
            removeFromList(i);
        });
    }
});


function addToList(index) {
    var myElem = document.getElementById(`participant${index}`);
    if (myElem === null) {
        document.getElementById("participants").innerHTML += `<li id="participant${index}">${mitglieder[index].name} ${mitglieder[index].vorname}</li>`;
    }

}

function removeFromList(index) {
    var myElem = document.getElementById(`participant${index}`);
    if (myElem !== null) {
        document.getElementById(`participant${index}`).remove();
    }
}
