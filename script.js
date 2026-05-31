let myColor = "#CCD67F" //Selected Color
let isRandom = false;

// FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Changes the color of each cell
const changeColor = function(cell){
    let color = myColor;
    if (isRandom){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        color = `rgb(${r}, ${g}, ${b})`;
    } else {
        color = myColor;
    }
    console.log("add color")
    cell.style.backgroundColor = color;
    cell.classList.add("isColored"); //This so that it knows when to add opacity
}


//Change Opacity of cell
const changeOpacity = function(cell){
    //Gets Computed style CSS of cell (we are looking for opacity)
    const cellComputedStyle = window.getComputedStyle(cell)
    currentOpacity = Number(cellComputedStyle.opacity) + 0.2; //Adjust the Number to adjust the strength of opacity change 
    console.log("change opacity")

    cell.style.opacity = currentOpacity;   
}

const changeGrid = function(cell){
    if (cell.classList.contains("isColored")){
        changeOpacity(cell);
    } else {
        changeColor(cell);
    }


    // let currentOpacity = 0.1;
    

    // if (cell.classList.contains('isColored')){
    //     //Gets Computed style CSS of cell (we are looking for opacity)
    //     const cellComputedStyle = window.getComputedStyle(cell)
    //     currentOpacity = Number(cellComputedStyle.opacity) + 0.2; //Adjust the Number to adjust the strength of opacity change 
    //     console.log("change opacity")

    //     cell.style.opacity = currentOpacity;   
    // } else {
    //     let color = "";
    //     if (isRandom){
    //         const r = Math.floor(Math.random() * 256);
    //         const g = Math.floor(Math.random() * 256);
    //         const b = Math.floor(Math.random() * 256);

    //         color = `rgb(${r}, ${g}, ${b})`;
    //     } else {
    //         color = myColor;
    //     }
    //     console.log("add color")
    //     cell.style.backgroundColor = color;
    // }
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

    //Event listener for hover run changeGrid function
    const gridCell = document.querySelectorAll(".gridCell");

    gridCell.forEach((gridCell) => {
        gridCell.addEventListener("mouseenter", () => changeGrid(gridCell));
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
btnRandom.addEventListener("click", () => {
    console.log("Random Color")
    isRandom = true 
})


//temporary for game start
createGrid(10);
