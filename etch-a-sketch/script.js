const container = document.querySelector('.container');
const btn = document.querySelector('.new-grid');
let n = 0; // user's dimensions for grid

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

// Add button to get user input for grid's dimensions
btn.addEventListener('click', () => {
    do {
        if (n > 100)
            alert('Maximum is 100');
        n = prompt('Number of squares per side:');
    }
    while(n > 100);
});