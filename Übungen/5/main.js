let mitglieder = [
    [
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
    ],
    [
        {
            name: "Joshi",
            vorname: "Mario",
            email: "foo@bar.com"
        },
        {
            name: "Luigi",
            vorname: "Wario",
            email: "Super@doe.org"
        },
    ],    
    [
        {
            name: "Holger",
            vorname: "Müller",
            email: "Holger.Müller@bar.com"
        },
        {
            name: "Frank",
            vorname: "Walter",
            email: "Frank@Walter.org"
        },
    ]
];

let indexMem = 0;
let indexSport = 0;


//indexSport = document.getElementsByName("sportArtRadio").value; 

/*
function checkRadio() {
    const sportArtRadios = document.querySelectorAll('input[name="sportArtRadio"]').value;
    for (const sportArtRadio of sportArtRadios) {
        if (sportArtRadio.checked) {
            indexSport = sportArtRadio.value;
            break;
        }
    }
}
*/
function showCurrentMember(x, y) {
    document.getElementById("showMem").innerHTML = `
    <p>Sport Index: ${indexSport}</p>
    <p>Member Index: ${indexMem}</p>
    <p>${mitglieder[x][y].name}</p>
    <p>${mitglieder[x][y].vorname}</p>
    <p>${mitglieder[x][y].email}</p>
    `;
}

document.getElementById("showNextMemBtn").addEventListener("click", function () {
    indexMem++;
    if (indexMem >= mitglieder[indexSport].length) {
        indexMem = 0;
    }
    //checkRadio();
    showCurrentMember(indexSport, indexMem);
});

document.getElementById("showPrevMemBtn").addEventListener("click", function () {
    indexMem--;
    if (indexMem < 0) {
        indexMem = mitglieder[indexSport].length - 1;
    }
    //checkRadio();
    showCurrentMember(indexSport, indexMem);
});

allMemString = `<tr class="allMemRow1">
<td><p>Name</p></td>
<td><p>Vorname</p></td>
<td><p>Email</p></td>
<td><p>Gruppe</p></td>
</tr>`;

function showAllMem(x, index, array) {
    allMemString = allMemString + `
        <tr class="allMemRow${index % 2}">
            <td>
                <p>${mitglieder[indexSport][index].name}</p>
            </td>
            <td>
                <p>${mitglieder[indexSport][index].vorname}</p>
            </td>
            <td>
                <p>${mitglieder[indexSport][index].email}</p>
            </td>
            <td>
                <input class="addButton" id="[${[indexSport]}][${[index]}]" type="button" name="${index}" value="Add" onclick="addToList(${index})">
                <input class="removeButton" id="[${[indexSport]}][${[index]}]" type="button" name="${index}" value="Remove" onclick="removeFromList(${index})">
            </td>
        <tr>
    `;
    document.getElementById("showAllMem").innerHTML = allMemString;
    console.log("showAll");
}

document.getElementById("showAllMemBtn").addEventListener("click", function () {
    mitglieder[indexSport].forEach(showAllMem)
    document.getElementById("showAllMemBtn").remove();
});


/*
btns = document.getElementsByClassName("addButton");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
			console.log("hallo");
        });
    }
*/

function addToList(index) {
    var myElem = document.getElementById(`participant${index}`);
    if (myElem === null) {
        document.getElementById("participants").innerHTML += `<p id="participant${index}">${mitglieder[indexSport][index].name} ${mitglieder[indexSport][index].vorname}</p>`;
    }
    
}

function removeFromList(index) {
    document.getElementById(`participant${index}`).remove();
}
