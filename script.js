
// Create the vertical Columns (containers)
const createColumns = function(numColumns){
    const container = document.getElementById("container");

    for (i = 0; i < numColumns; i++){
        const verticalGrid = document.createElement("div");

        verticalGrid.classList.add("verticalGrid")
        container.appendChild(verticalGrid);
    }
}

//remove all grid divs
const resetGrid = function(){
    const container = document.getElementById("container");
    container.replaceChildren();
}

const btnGrid = document.getElementById("btn-grid");
btnGrid.addEventListener("click", () => {
    resetGrid();
    const gridNumber = prompt("Grid size: (2 - 100)");
    createColumns(gridNumber);
})

const btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", resetGrid);
