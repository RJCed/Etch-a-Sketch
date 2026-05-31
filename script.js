let myColor = "#CCD67F" //Selected Color
let isRandom = false;

// FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const changeRandomColor = function(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

//Changes the color of each cell
const changeGridColor = function(cell){
    let color = "";
    if (isRandom){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        color = `rgb(${r}, ${g}, ${b})`;
    } else {
        color = myColor;
    }
    cell.style.backgroundColor = color;
}

// Create Row-containers based on how big gridSize and each Row-containers contains cells (also based on gridSize)
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

    //Event listener for hover run changeGridColor function
    const gridCell = document.querySelectorAll(".gridCell");

    gridCell.forEach((gridCell) => {
        gridCell.addEventListener("mouseenter", () => changeGridColor(gridCell));
    })
}



//Function for remove old divs and set grid to default (10 cells)
const resetGrid = function(){
    const container = document.getElementById("container");
    container.replaceChildren();
    createGrid(10); //default
}


// FUNCTION END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// EVENT LISTENERS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


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

btnColor.addEventListener("click", () => {
    selectColor.click()
    isRandom = false;
})

selectColor.addEventListener("input", (event) => {
    myColor = event.target.value;
})

//For Random Color;
const btnRandom = document.getElementById("btn-random");
btnRandom.addEventListener("click", () => isRandom = true)

//temporary for game start
createGrid(10);
