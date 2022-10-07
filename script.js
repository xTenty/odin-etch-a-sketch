const container = document.createElement("div");
container.classList.add("container");

const containerWidth = "1000px";
const containerHeight = "1000px";
container.style.width = containerWidth;
container.style.height = containerHeight;

let side = 50;

createSquares();
document.body.appendChild(container);


function createSquares() {
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${side}, 1fr)`;
    // container.style.gridTemplateRows = (`repeat(${side}, 1fr`);

    for (let column = 0; column < side; column++) {
        for (let row = 0; row < side; row++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.border = "thin solid gray";
            square.addEventListener("mouseenter", () => square.style.backgroundColor = "black");
            container.appendChild(square);
        }
    }
}

function changeGrid() {
    
}



function createSquaresByFloatClear() {
    for (let column = 0; column < 16; column++) {
        if (column !== 0) {
            let emptyDiv = document.createElement("div");
            emptyDiv.style.clear = "both";
            container.appendChild(emptyDiv);
        }
        for (let row = 0; row < 16; row++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.border = "thick solid #0000FF";
            square.style.float = "left";
            square.style.height = "50px";
            square.style.width = "50px";
            container.appendChild(square);
        }
    }
}

function createSquaresByInlineBlock() {
    for (let column = 0; column < 16; column++) {
        if (column !== 0) {
            let emptyDiv = document.createElement("br");
            container.appendChild(emptyDiv);
        }
        for (let row = 0; row < 16; row++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.display = "inline-block"
            square.style.border = "thick solid #0000FF";
            square.style.height = "50px";
            square.style.width = "50px";
            container.appendChild(square);
        }
    }
    container.style.fontSize = "0px";
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
            container.appendChild(rowElement);
        }
    }
}

function createSquaresByCssGrid() {
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(16, 0fr)";
    for (let column = 0; column < 16; column++) {
        for (let row = 0; row < 16; row++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.border = "thick solid #0000FF";
            square.style.height = "50px";
            square.style.width = "50px";
            container.appendChild(square);
        }
    }
}
