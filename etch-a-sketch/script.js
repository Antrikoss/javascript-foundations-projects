const container = document.querySelector('.container');

// Create 16 x 16 grid of divs
for (let i = 0; i < 16 * 16; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}