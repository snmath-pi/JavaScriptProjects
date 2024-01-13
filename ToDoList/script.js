let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container');
let btn = document.querySelector('.button');
btn.addEventListener('click', function() {

    if(inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // console.log(inputBox.value);
        document.querySelector('.list-container').appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        // listContainer.appendChild('fksadjf');
        // console.log('afjs');
    }
    
    inputBox.value = '';
    saveData();
}, false); 

document.querySelector('.list-container').addEventListener('click', function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); 
        saveData();

        
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();

    }
}, false);


function saveData() {
    localStorage.setItem('data', document.querySelector('.list-container').innerHTML)
}

function showTasks() {
    document.querySelector('.list-container').innerHTML = localStorage.getItem('data');
}
showTasks()