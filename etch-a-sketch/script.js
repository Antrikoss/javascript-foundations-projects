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

drawGrid(16);

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