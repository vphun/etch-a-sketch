let gridSize = 16;

const container = document.querySelector(".container");
container.addEventListener("mouseover", (e)=>{    
    if (e.target.classList[0] == "cell") {
        e.target.classList.remove(`${color}`);  // reveal container background after hovering
    }
});

let color = container.classList[1];

const resetBtn = document.querySelector("#clear");
resetBtn.addEventListener("click", ()=>{
    gridSize = prompt("How many squares per side?");
    resetGrid(gridSize);
});

const colorBtns = document.querySelectorAll(".colors button");
colorBtns.forEach(button=>button.addEventListener("click", (e)=>{
    changeColors(e.target.className);
}));

// initialize grid
resetGrid(gridSize);

function generateCells(dimensions) {
    for (i = 0; i < dimensions**2; i++) {
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
        newCell.classList.add(`${color}`);
        container.appendChild(newCell);
    }
}

function resetGrid(dimensions) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    generateCells(dimensions);
    container.style.grid = `repeat(${dimensions}, auto) / repeat(${dimensions}, auto)`;
}

function changeColors(newColor) {
    let cells = document.querySelectorAll(".cell");

    container.classList.remove(`${color}`);
    container.classList.add(`${newColor}`);

    cells.forEach(cell=>{
        if (cell.className != "cell") {
            cell.classList.remove(`${color}`);
            cell.classList.add(`${newColor}`);
        }
    });
    color = newColor;
}