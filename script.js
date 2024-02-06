//we need to create code for the output because right now all we have is the input boxes which work but don't do anything when submitted
//create a loop of divs
//<div id="row" class="row"></div>

//we needa find a way to add an event listener
//then we needa find a way for said event listener to affect the squares
//then we want tha squares to change colours and look sick af

const rows = document.getElementById('rows');
const columns = document.getElementById('columns');
const color = document.getElementById('color');
const submit = document.getElementById('submit');
const grid = document.getElementById('grid');

button.addEventListener("click", makeGrid);

function makeGrid() {
    grid.innerHTML = "";
    for (let i = 0; i < rows.value; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row')
        grid.appendChild(rowDiv);
        for (let j=0; j < columns.value; j++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = color.value;
        rowDiv.appendChild(box);
        box.addEventListener("click", changeColor);
        }
    }
}

function changeColor(event) {
    const R = Math.floor(Math.random()*255);
    const G = Math.floor(Math.random()*255);
    const B = Math.floor(Math.random()*255);

    event.target.style.backgroundColor = `rgb(${R},${G},${B})`;
}