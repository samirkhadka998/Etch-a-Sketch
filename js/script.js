

var enableDrawing = true;
var color = 'random';
const container = document.querySelector(".container");
createGrid();

const btn = document.querySelector('button');
btn.addEventListener('click', btnClickPrompt);


const clearbtn = document.querySelector('#clear');
clearbtn.addEventListener('click', clearDivs);

const checkbox = document.querySelector("#drawing");
checkbox.addEventListener("change", onCheckBoxChange);

const colorDropdown = document.querySelector('#color');
colorDropdown.addEventListener('change', colorChanged);

function onCheckBoxChange(e) {
    console.log(e.target.checked)
    if (e.target.checked) {
        enableDrawing = true;
    }
    else {
        enableDrawing = false;

    }
}




function btnClickPrompt() {
    let numberOfGrid = prompt("Enter number of grid");
    if (!Number(numberOfGrid)) {
        alert("Invalid input.");
        return;
    }
    else if (numberOfGrid > 100 || numberOfGrid < 1) {
        alert("Number should be between 1 to 100.");
        return;
    }

    numberOfGrid = Number(numberOfGrid);
    createGrid(numberOfGrid);
}

function createGrid(num = 16) {

    container.textContent = '';
    container.style.display = 'Flex';
    container.style.flexWrap = 'wrap'
    container.style.flexDirection = 'column'
    container.style.width = '600px';
    container.style.height = '600px';
    container.style.margin = '0 auto';
    container.style.border= "3px solid #ffffff"
    container.style.background = '#2196f32e'

    for (let index = 1; index <= num; index++) {
        const row = document.createElement('div');
        row.classList.add('row')
        // row.style.display = 'Flex';
        // // row.style.gap = '10px'
        // row.style.flexWrap = 'wrap'
        for (let j = 1; j <= num; j++) {
            const div = document.createElement('div');

            div.classList.add('rowChild');
            // div.style.height = '100px';
            // div.style.width = '100px';
            // div.style.color = 'white';
            // div.style.background = 'black';

            row.appendChild(div);
        }
        container.appendChild(row);



    }


    divMouseEnter();


}

function divMouseEnter() {
    const divs = document.querySelectorAll('.rowChild');

    divs.forEach(div => {
        if (!div) return;
        div.addEventListener('mouseenter', addTrailingBackground)
    })
}


function clearDivs() {
    const divs = document.querySelectorAll('.rowChild');
    if (!divs) return;
    divs.forEach(div => {
        if (!div) return;
        div.style.background = 'none'
    })
}

function colorChanged(e){
    color = e.target.value;
}

function addTrailingBackground(e) {
    

    if(enableDrawing){
        switch (color) {
            case 'random':
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                randomColor =  "#" + randomColor;
                e.target.style.background = randomColor;
                break;
            case 'black':
                e.target.style.background = 'black';
                break;
            case 'white':
                e.target.style.background = 'white';
                break;
            case 'gray':
                e.target.style.background = 'gray';
            default:
                break;
        }
        // e.target.classList.add('black');
    }
}