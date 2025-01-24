"use strict";
//Fetching elements from html-document
const openBtn = document.getElementById(openMenu);
const closeBtn = document.getElementById(closeMenu);
const mainMenu = document.getElementById(navContainer);
console.log(mainMenu);
//Adding eventlisteners
openBtn.addEventListener('click', displayMenu);
function displayMenu() {
    const style = window.getComputedStyle(mainMenu);
    console.log(style);
}

//# sourceMappingURL=index.aa69868b.js.map
