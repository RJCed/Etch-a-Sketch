
// Create the horizontal rows (containers)
const createRows = function(numRows){
    const container = document.getElementById("container");

    for (i = 0; i < numRows; i++){
        const horizontalGrid = document.createElement("div");

        horizontalGrid.classList.add("horizontalGrid")
        container.appendChild(horizontalGrid);
    }
}


const btnGrid = document.getElementById("btn-grid");
btnGrid.addEventListener("click", () => {
    const gridNumber = prompt("Grid size: (2 - 100)");
    createRows(gridNumber);
})
