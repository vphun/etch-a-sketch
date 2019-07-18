const container = document.querySelector(".container");

resetGrid(16);

function generateCells(dimensions) {
    for (i = 0; i < dimensions**2; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
}

container.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    if (event.target.className == "cell") {
        event.target.style.backgroundColor = "black"}
})

function resetGrid(dimensions) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    generateCells(dimensions);
    container.style.grid= `repeat(${dimensions}, auto) / repeat(${dimensions}, auto) `;
}

let resetBtn = document.querySelector("#clear");
resetBtn.addEventListener("click", function() {
    let dimensions = prompt("How many squares per side?")
    resetGrid(dimensions);
});