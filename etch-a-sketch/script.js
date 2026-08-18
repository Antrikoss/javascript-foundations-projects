const container = document.querySelector('.container');
const btn = document.querySelector('.new-grid');
let n = 0; // user's dimensions for grid

function drawGrid(n) {
    for (let i = 0; i < n * n; i++) {
        // Create square
        let square = document.createElement('div');
        square.classList.add('square');

        // Calculate the width of each square so 'n' squares fit in every row
        let widthPercentage = 1 / n * 100; 
        // Then round the number to 4 decimal places (if it's float)
        widthPercentage = widthPercentage.toFixed(4);
        square.style.width = widthPercentage + '%';

        // Add square to grid
        container.appendChild(square);
    }
}

function removeGrid() {
    container.replaceChildren();
}

function addEventListenerToSquares(squares) {
    squares.forEach(square => {{
        square.addEventListener('mouseenter', () => {
            // Set random RGB values for background color by generating numbers between 0 and 255
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            
            // Add a progressive darkening effect
            let opacity = parseFloat(getComputedStyle(square).opacity);
            // reduce opacity by 10%
            if(opacity > 0)
                opacity -= 0.1;
            square.style.opacity = String(opacity);
        });
    }});
}

// Draw initial grid of 16 squares per side
drawGrid(16);

// Set container's background to black for the darkening effect
container.style.backgroundColor = 'black'

// Set up "hover" effect
let squares = document.querySelectorAll('.square');
addEventListenerToSquares(squares);

// Add button to get user input for grid's dimensions
btn.addEventListener('click', () => {
    do {
        if (n > 100)
            alert('Maximum is 100');
        n = prompt('Number of squares per side:');
    }
    while(n > 100);
    removeGrid();
    drawGrid(n);
    squares = document.querySelectorAll('.square');
    addEventListenerToSquares(squares);
});