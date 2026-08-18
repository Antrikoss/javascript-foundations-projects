const container = document.querySelector('.container');

// Create 16 x 16 grid of divs
for (let i = 0; i < 16 * 16; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

// Set up "hover" effect
const squares = document.querySelectorAll('.square');

squares.forEach(square => {{
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'blue';        
    });
    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = 'red';
    });
}});