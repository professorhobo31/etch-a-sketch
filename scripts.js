let container = document.getElementsByClassName('container');
 
for (let i = 0; i < 256; i++) {
    let gridElement = document.createElement('div');
    gridElement.classList.add('gridElement');
    gridElement.textContent = i;
    container[0].appendChild(gridElement)
}