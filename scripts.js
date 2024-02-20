let container = document.getElementsByClassName('container');
 
for (let i = 0; i < 256; i++) {                                     //function creates the divs for the board and appends to container div
    let gridElement = document.createElement('div');
    gridElement.classList.add('gridElement');
    // gridElement.textContent = i;
    container[0].appendChild(gridElement);
}

let gridElements = document.getElementsByClassName('gridElement');  //creates an object out of the created divs
// console.log(gridElements);

function pixelColoring(evt) {
    evt.target.style.cssText = 'background-color: black'
}

for (let i = 0; i < gridElements.length; i++) {                     //uses the created object to asign an eventlistener to every square
    // gridElements[i].textContent = i;
    gridElements[i].addEventListener('click', pixelColoring);    
}