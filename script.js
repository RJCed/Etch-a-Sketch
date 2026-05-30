// Create the vertical Columns (containers)
const createGrid = function(gridSize){
    const container = document.getElementById("container");

    for (i = 0; i < gridSize; i++){
        //This creates the columns/row containers
        const verticalGrid = document.createElement("div");


        //This creates each box in row container
        for (x = 0; x < gridSize; x++){
            const horizontalGrid = document.createElement("div");
            horizontalGrid.classList.add("horizontalGrid");
            verticalGrid.appendChild(horizontalGrid);
        }


        verticalGrid.classList.add("verticalGrid")
        container.appendChild(verticalGrid);
    }
}


// Create the horizontal rows 
const createRows = function(numRows){
    const columnContainer = document.getElementsByClassName("verticalGrid")
    // It might be wise to integrate this into the for loop of createColums
}


//remove all grid divs (Temporary Function, may change to resetting colors)
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


// Button for removing Grid (Temporary Function, may change to resetting colors)
const btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", resetGrid);



//temporary for game start
createGrid(10);