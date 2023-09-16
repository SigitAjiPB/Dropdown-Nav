const navMainBtn = document.getElementById('navMainBtn');
const navBarMain = document.getElementById('navBarMain');

navMainBtn.addEventListener('click', () => {
    navBarMain.classList.toggle('hidden');
});

const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const navWrapper = document.getElementById('navWrapper');

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

