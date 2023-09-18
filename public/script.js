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

const addBtn = document.getElementById('addBtn');
const listInput = document.getElementById('listInput');
const listTodo = document.getElementById('listTodo');
const mainContainer = document.getElementById('mainContainer');
const inputForm = document.getElementById('inputForm');

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

addBtn.addEventListener('click', (e) => {
    if (listInput.value != "") {
        displayTodo(listInput.value);
        listInput.value = "";
    }
});










displayTodo = () => {

    // add Button
    let listWrapper = document.createElement("div");
    listWrapper.classList.add("listWrapper");

    listWrapper.innerHTML = `<div id="listTodo" class="flex justify-between items-center gap-4 mb-3">
    <div class="bg-slate-200 flex w-full rounded-lg p-2 gap-2 items-center justify-between">
        <button id="checkBtn" type="button" class="bg-slate-300 flex justify-center items-center rounded-lg text-slate-300"><span class="material-symbols-outlined">done</span></button>
            
        <p id="textList" class="max-w-none w-full">${listInput.value}</p>
    </div>
    <button id="deleteBtn" class="bg-red-400 text-white flex items-center justify-center rounded-lg h-8 w-10 hover:bg-red-500"><span class="material-symbols-outlined">delete</span></button>
    </div>`;


    // Delete Button
    let deleteBtn = listWrapper.querySelector('#deleteBtn');

    deleteBtn.addEventListener('click', () => {
        listWrapper.remove();
    });

    // Check Button
    let checkBtn = listWrapper.querySelector('#checkBtn');
    let textList = listWrapper.querySelector('#textList');

    checkBtn.addEventListener('click', () => {
        textList.classList.toggle('line-through');
        checkBtn.classList.toggle('bg-slate-500');
        checkBtn.classList.toggle('text-white');
    });


    mainContainer.appendChild(listWrapper);
}