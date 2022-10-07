const contentContainer = document.querySelector(".contentContainer");

const gridContainer = document.createElement("div");
gridContainer.classList.add("container");

const containerWidth = "1000px";
const containerHeight = "1000px";
gridContainer.style.width = containerWidth;
gridContainer.style.height = containerHeight;

const sideValuePara = document.querySelector("#sideValue");
const sideSelector = document.querySelector("#side");
sideSelector.oninput = function() {
    gridSide = getGridSizeFromSelector()
    sideValuePara.textContent = `${gridSide}x${gridSide}`;
    gridContainer.innerHTML = "";
    createGrid();
}
let gridSide = getGridSizeFromSelector();

let drawColor = "black";

const drawButton = document.querySelector("#drawButton");
const eraseButton = document.querySelector("#eraseButton");
const clearButton = document.querySelector("#clearButton");
const colorPalette = document.querySelector("#colorPalette");
drawButton.style.backgroundColor = "black";
eraseButton.style.backgroundColor = "white";
clearButton.style.backgroundColor = "white";
colorPalette.style.backgroundColor = "white";

drawButton.addEventListener("click", () => {
    drawColor = colorPalette.value;
    drawButton.style.backgroundColor = "black";
    eraseButton.style.backgroundColor = "white";
    });
eraseButton.addEventListener("click", () => {
    drawButton.style.backgroundColor = "white";
    eraseButton.style.backgroundColor = "black";
    drawColor = "white";
    });
clearButton.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    createGrid()});
colorPalette.oninput = function() {
    drawColor = colorPalette.value;
}

let mousepressed = false;
document.addEventListener("mousedown", () => mousepressed = true);
document.addEventListener("mouseup", () => mousepressed = false);

createGrid();
contentContainer.appendChild(gridContainer);


function createGrid() {
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = `repeat(${gridSide}, 1fr)`;
    // container.style.gridTemplateRows = (`repeat(${side}, 1fr`);

    for (let column = 0; column < gridSide; column++) {
        for (let row = 0; row < gridSide; row++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.border = "thin solid gray";
            square.addEventListener("mouseenter", () => {
                if(mousepressed)
                    square.style.backgroundColor = drawColor});
            gridContainer.appendChild(square);
        }
    }
}

function getGridSizeFromSelector() {
   return sideSelector.value;
}



function createSquaresByFloatClear() {
    for (let column = 0; column < 16; column++) {
        if (column !== 0) {
            let emptyDiv = document.createElement("div");
            emptyDiv.style.clear = "both";
            gridContainer.appendChild(emptyDiv);
        }
        for (let row = 0; row < 16; row++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.border = "thick solid #0000FF";
            square.style.float = "left";
            square.style.height = "50px";
            square.style.width = "50px";
            gridContainer.appendChild(square);
        }
    }
}

function createSquaresByInlineBlock() {
    for (let column = 0; column < 16; column++) {
        if (column !== 0) {
            let emptyDiv = document.createElement("br");
            gridContainer.appendChild(emptyDiv);
        }
        for (let row = 0; row < 16; row++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.display = "inline-block"
            square.style.border = "thick solid #0000FF";
            square.style.height = "50px";
            square.style.width = "50px";
            gridContainer.appendChild(square);
        }
    }
    gridContainer.style.fontSize = "0px";
}

function createSquaresByFlexbox() {
    for (let column = 0; column < 16; column++) {
        let rowElement = document.createElement("div");
        rowElement.style.display = "flex";
        rowElement.style.flexDirection = "row";
        for (let row = 0; row < 16; row++) {
            let square = document.createElement("div");
            square.classList.add("square");
            // square.style.display = "flex";
            // square.style.flexDirection = "row";
            square.style.border = "thick solid #0000FF";
            square.style.height = "50px";
            square.style.width = "50px";
            rowElement.appendChild(square);
            gridContainer.appendChild(rowElement);
        }
    }
}

function createSquaresByCssGrid() {
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = "repeat(16, 0fr)";
    for (let column = 0; column < 16; column++) {
        for (let row = 0; row < 16; row++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.border = "thick solid #0000FF";
            square.style.height = "50px";
            square.style.width = "50px";
            gridContainer.appendChild(square);
        }
    }
}
