let container = document.getElementsByClassName('container');
 
for (let i = 0; i < 256; i++) {                                     //function creates the divs for the board and appends to container div
    let gridElement = document.createElement('div');
    gridElement.classList.add('gridElement');
    // gridElement.textContent = i;
    container[0].appendChild(gridElement);
}

let gridElements = document.getElementsByClassName('gridElement');  //creates an object out of the created divs
// console.log(gridElements);

function pixelColoring(evt) {                                       //uses the event target attribute to know which square to paint
    let element = evt.target;
    let styles = getComputedStyle(element);
    let currentBackground = styles.getPropertyValue('background-color');        //checks background color to toggle between paint and erase
    if (currentBackground == 'rgb(255, 255, 255)' || currentBackground == 'rgb(169, 169, 169)') { 
        evt.target.style.cssText = 'background-color: black';       //"paint"
    }
    else if (currentBackground == 'rgb(0, 0, 0)') {
        evt.target.style.cssText = 'background-color: white';       //"erase"
    }
    console.log(currentBackground);
}

for (let i = 0; i < gridElements.length; i++) {                     //uses the created object to asign an eventlistener to every square
    gridElements[i].addEventListener('click', pixelColoring);    
}

