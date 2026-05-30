// Create the vertical Columns (containers)
const createGrid = function(gridSize){
    const container = document.getElementById("container");

    for (i = 0; i < gridSize; i++){
        //This creates the columns/row containers
        const verticalGrid = document.createElement("div");


        //This creates each box in row container
        for (x = 0; x < gridSize; x++){
            const gridCell = document.createElement("div");
            gridCell.classList.add("gridCell");
            verticalGrid.appendChild(gridCell);
        }


        verticalGrid.classList.add("verticalGrid")
        container.appendChild(verticalGrid);
    }
}


//remove old divs and set grid to default (10 cells)
const resetGrid = function(){
    const container = document.getElementById("container");
    container.replaceChildren();
    createGrid(10); //default
}


// Button for Creating Grid
const btnGrid = document.getElementById("btn-grid");
btnGrid.addEventListener("click", () => {
    
    //This removes previous grid cells
    const container = document.getElementById("container");
    container.replaceChildren();

    const gridNumber = prompt("Grid size: (2 - 100)");
    createGrid(gridNumber);
})


// Button for resetting
const btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", resetGrid);


//For selecting Color
const btnColor = document.getElementById("btn-color");
const selectColor = document.getElementById("selectColor");

btnColor.addEventListener("click", () => selectColor.click())



//temporary for game start
createGrid(10);