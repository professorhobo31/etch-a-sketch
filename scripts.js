let container = document.getElementsByClassName('container');
let resolution = 16;
let divSize = (960/resolution) - 2;
 
for (let i = 0; i < (resolution * resolution); i++) {               //function creates the divs for the board and appends to container div
    let gridElement = document.createElement('div');
    gridElement.classList.add('gridElement');
    gridElement.style.height = divSize + 'px';
    gridElement.style.width = divSize + 'px';
    // gridElement.textContent = divSize;
    container[0].appendChild(gridElement);
}

let gridElements = document.getElementsByClassName('gridElement');  //creates an object out of the created divs
// console.log(gridElements);

function pixelColoring(evt) {                                       //uses the event target attribute to know which square to paint
    let element = evt.target;
    let styles = getComputedStyle(element);
    let currentBackground = styles.getPropertyValue('background-color');        //checks background color to toggle between paint and erase
    if (currentBackground == 'rgb(255, 255, 255)' || currentBackground == 'rgb(169, 169, 169)') { 
        evt.target.style.backgroundColor =  'black';                            //"paint"
    }
    else if (currentBackground == 'rgb(0, 0, 0)') {
        evt.target.style.backgroundColor = 'white';                             //"erase" 
    }
    console.log(currentBackground);
}

for (let i = 0; i < gridElements.length; i++) {                     //uses the created object to asign an eventlistener to every square
    gridElements[i].addEventListener('click', pixelColoring);    
}


let display = document.getElementById('resDisplay');
let slider = document.getElementById('slider').oninput = function() {
    let value = this.value;
    display.textContent = value + "x" + value;         //need a way to set the resolution global variable from here
    resolution = this.value
    console.log(resolution)
}

const resButton = document.getElementById('resButton');

function setResolution() {
    const grid = document.querySelectorAll('.gridElement');  //select already drawn grids

    grid.forEach(box => {          //delete em
        box.remove();
    })

    divSize = (960/resolution) - 2;     //calculate new div size matching new resolution

    for (let i = 0; i < (resolution * resolution); i++) {       //redraw
         let gridElement = document.createElement('div');
         gridElement.classList.add('gridElement');
         gridElement.style.height = divSize + 'px';
         gridElement.style.width = divSize + 'px';
        //  gridElement.textContent = divSize;
         container[0].appendChild(gridElement);
    }

    let gridElements = document.getElementsByClassName('gridElement');  //creates an object out of the created divs

    for (let i = 0; i < gridElements.length; i++) {                     //uses the created object to asign an eventlistener to every square
        gridElements[i].addEventListener('click', pixelColoring);    
    }
}
resButton.addEventListener('click', setResolution);
