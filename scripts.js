let container = document.getElementsByClassName('container');
 
for (let i = 0; i < 256; i++) {
    let gridElement = document.createElement('div');
    gridElement.classList.add('gridElement');
    // gridElement.textContent = i;
    container[0].appendChild(gridElement);
}

let gridElements = document.getElementsByClassName('gridElement');
console.log(gridElements);

for (let i = 0; i < gridElements.length; i++) {
    gridElements[i].textContent = i;
    gridElements[i].addEventListener('click', () => alert("Clicking works"));    
}