let container = document.getElementsByClassName('container');
let resolution = 16;
let divSize = (800 / resolution) - 2;
let currentMode = 'blackWhite';
let currentBrush = 'paint';

let mouseDown = false;                                 //main idea is to store the state of the mouse on a var and check it later
document.onmousedown = () => (mouseDown = true);
document.onmouseup = () => (mouseDown = false);

for (let i = 0; i < (resolution * resolution); i++) {               //function creates the initial divs for the board and appends to container div
    let gridElement = document.createElement('div');
    gridElement.classList.add('gridElement');
    gridElement.style.height = divSize + 'px';
    gridElement.style.width = divSize + 'px';
    // gridElement.textContent = divSize;
    container[0].appendChild(gridElement);
}

let gridElements = document.getElementsByClassName('gridElement');  //variable contains the divs created in the previous step

/**
 * Function checks background color of div and paints it full black or on a greyscale by 10% increments. It uses the event target attribute to know which square to paint.
 * 
 * @param {Event} evt 
 */
function pixelColoring(evt) {
    if (evt.type === 'mouseover' && !mouseDown) { return }
    let element = evt.target;
    let styles = getComputedStyle(element);
    let currentBackground = styles.getPropertyValue('background-color');

    if (currentBrush == 'paint' && currentMode == 'blackWhite') {
        evt.target.style.backgroundColor = 'black';
    }

    else if (currentBrush == 'paint' && currentMode == 'greyscale') {
        if (currentBackground == 'rgb(255, 255, 255)' || currentBackground == 'rgb(169, 169, 169)') {
            evt.target.style.backgroundColor = 'rgb(229, 229, 229)';
        }
        else if (currentBackground == 'rgb(229, 229, 229)') {
            evt.target.style.backgroundColor = 'rgb(204, 204, 204)';
        }
        else if (currentBackground == 'rgb(204, 204, 204)') {
            evt.target.style.backgroundColor = 'rgb(179, 179, 179)';
        }
        else if (currentBackground == 'rgb(179, 179, 179)') {
            evt.target.style.backgroundColor = 'rgb(153, 153, 153)';
        }
        else if (currentBackground == 'rgb(153, 153, 153)') {
            evt.target.style.backgroundColor = 'rgb(128, 128, 128)';
        }
        else if (currentBackground == 'rgb(128, 128, 128)') {
            evt.target.style.backgroundColor = 'rgb(102, 102, 102)';
        }
        else if (currentBackground == 'rgb(102, 102, 102)') {
            evt.target.style.backgroundColor = 'rgb(77, 77, 77)';
        }
        else if (currentBackground == 'rgb(77, 77, 77)') {
            evt.target.style.backgroundColor = 'rgb(51, 51, 51)';
        }
        else if (currentBackground == 'rgb(51, 51, 51)') {
            evt.target.style.backgroundColor = 'rgb(26, 26, 26)';
        }
        else if (currentBackground == 'rgb(26, 26, 26)') {
            evt.target.style.backgroundColor = 'rgb(0, 0, 0)';
        }
        else {
            return
        }
    }

    else if (currentBrush == 'erase') {
        evt.target.style.backgroundColor = '';
    }
    console.log(mouseDown);
}

for (let i = 0; i < gridElements.length; i++) {                     //uses the created object to asign an eventlistener to every square
    gridElements[i].addEventListener('mousedown', pixelColoring);
    gridElements[i].addEventListener('mouseover', pixelColoring);
}

let display = document.getElementById('resDisplay');
let slider = document.getElementById('slider').oninput = function () {
    let value = this.value;
    display.textContent = value + "x" + value;
    resolution = this.value
    console.log(resolution)
}

const resButton = document.getElementById('resButton');

/**
 * First deletes the grid, then creates a new one using the new resolution set by the slider and adds eventlisteners for them to work as intended.
 */
function setResolution() {
    const grid = document.querySelectorAll('.gridElement');

    grid.forEach(box => {
        box.remove();
    })

    divSize = (800 / resolution) - 2;     //calculate new div size matching new resolution

    for (let i = 0; i < (resolution * resolution); i++) {       //redraw
        let gridElement = document.createElement('div');
        gridElement.classList.add('gridElement');
        gridElement.style.height = divSize + 'px';
        gridElement.style.width = divSize + 'px';
        //  gridElement.textContent = divSize;
        container[0].appendChild(gridElement);
    }

    gridElements = document.getElementsByClassName('gridElement');  //stores variable out of the created divs

    for (let i = 0; i < gridElements.length; i++) {                     //uses the variable to asign an eventlistener to every square
        gridElements[i].addEventListener('mousedown', pixelColoring);
        gridElements[i].addEventListener('mouseover', pixelColoring);
    }
}
resButton.addEventListener('click', setResolution);

const eraseButton = document.getElementById('eraser');
eraseButton.addEventListener('click', () => {
    currentBrush = 'erase';
});

const paintButton = document.getElementById('painter');
paintButton.addEventListener('click', () => {
    currentBrush = 'paint';
});

const modeButton = document.getElementById('mode');
modeButton.addEventListener('click', () => {
    if (currentMode == 'blackWhite') {
        currentMode = 'greyscale'
        modeButton.textContent = 'Greyscale Mode'
    }
    else {
        currentMode = 'blackWhite';
        modeButton.textContent = 'B/W Mode'
    }
})

