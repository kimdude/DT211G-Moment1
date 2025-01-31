"use strict"
//Fetching elements from html-document
const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const mainMenu = document.getElementById("navContainer");

//Adding eventlisteners
openBtn.addEventListener('click', displayMenu);
closeBtn.addEventListener('click', displayMenu);

function displayMenu() {
    const style = window.getComputedStyle(mainMenu);

    if(style.display === "none") {
        mainMenu.style.display = "block";
        openBtn.style.display = "none";
    } else {
        mainMenu.style.display = "none";
        openBtn.style.display = "block";
    }
}

//Fetching json-file with try/catch och async/await
async function getSchedule() {
    try {
        const response = await fetch('https://webbutveckling.miun.se/files/ramschema_ht24.json');

        if (!response.ok) {
            throw new Error('Nätverksproblem - felaktigt svar från servern.');
        }

    const data = await response.json();
    return data;
    } catch (error) {
        console.error('Ett fel har uppstått:', error.message);
    }
}

//Adding data to table
async function consoleSchedule() {
    const data = await getSchedule();
    for(let i = 0; i < data.length; i++) {
        //Fetching table from HTML-document
        const tbody = document.getElementById('tableBody');
        const tableRow = document.createElement('tr');

        tbody.appendChild(tableRow);

        //Add course code to table
        const code = data[i].code;
        const codeNode = document.createTextNode(code);
        const codeData = document.createElement('td');

        tableRow.appendChild(codeData);
        codeData.appendChild(codeNode);

        //Add course names to table
        const name = data[i].coursename;
        const nameNode = document.createTextNode(name);
        const nameData = document.createElement('td');        

        tableRow.appendChild(nameData);
        nameData.appendChild(nameNode);

        //Add course progression to table
        const progress = data[i].progression;
        const progressNode = document.createTextNode(progress);
        const progressData = document.createElement('td');

        tableRow.appendChild(progressData);
        progressData.appendChild(progressNode);

        console.table(data)
    }
}

consoleSchedule();