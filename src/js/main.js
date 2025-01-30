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



//Testa läs ut json-fil - ta bort sedan!!!
async function consoleSchedule() {
    const data = await getSchedule();
    console.log(data.code);
}

consoleSchedule();