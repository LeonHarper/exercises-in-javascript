let gridSize = 10;
let row = '#';
let grid = ''

for (let count = 3; count <= gridSize; count += 2) {
    row += ' #';    
}

for (let count = 1; count <= gridSize; count++) {
    grid += row;
    grid += '\n';
}
console.log(grid);