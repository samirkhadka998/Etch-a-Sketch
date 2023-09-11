const container = document.querySelector(".container");

const div = document.createElement('div');

div.textContent = 1;
div.style.height = '100px';
div.style.width = '100px';
div.style.display='inline-block';
div.style.color = 'white';
div.style.background = 'black';

container.appendChild(div);