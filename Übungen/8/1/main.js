
let mitglieder;





//Ab hier gehts mit 3.a los
//Die dynamische Darstellung erfolgt indem ein String durch einen foreach Loop des Arrays die Mitglieder Informationen und html Elemente angefügt werden.
allMemString = `<tr class="allMemRow1">
<td><p>Name</p></td>
<td><p>Vorname</p></td>
<td><p>Email</p></td>
<td><p>Gruppe</p></td>
</tr>`;

//wird in dem erwähnten foreach Loop aufgerufen.
//für die css darstellung wird durch die Modulo Operation die Klasse der einzelnen rows berechnet, sodass "allMemRow0" und "allMemRow1" existieren.
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
                <input class="addBtn" id="addMemBtn[${index}]" type="button" value="Add">
                <input class="rmBtn" id="rmMemBtn[${index}]" type="button" value="Remove">
            </td>
        <tr>
    `;
}

document.getElementById("showAllMemBtn").addEventListener("click", function () {
    //foreach Loop des arrays
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Created a Table with every Member");
            mitglieder = JSON.parse(this.responseText);
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
            for (let i = 0; i < addBtn.length; i++) {
                addBtn[i].addEventListener("click", function () {
                    console.log("Added Index: " + i);
                    addToList(i);
                });
            }
        }
    };
    xhttp.open("GET", "members.json", true);
    xhttp.send();


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
