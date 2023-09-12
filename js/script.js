

const container = document.querySelector(".container");





createGrid();
const btn = document.querySelector('button');
btn.addEventListener('click', btnClickPrompt);


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
    container.style.margin = '0 auto'

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

}

const divs = document.querySelectorAll('.rowChild');

divs.forEach(div => {
    if(!div) return;
    div.addEventListener('mouseenter', addTrailingBackground )
})

function addTrailingBackground(e){
    // this.style.classList.add('black');
    e.target.classList.add('black');
}