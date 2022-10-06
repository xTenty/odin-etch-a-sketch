const container = document.createElement("div");
container.classList.add("content")

createSquares();
document.body.appendChild(container);

function createSquares() {
    container.style.display = "grid";
    let columns = screen.width/16;
    container.style.gridTemplateColumns = `repeat(${columns}, 0fr)`;

    for (let column = 0; column < screen.height/16; column++) {
        
        for (let row = 0; row < screen.width/16; row++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.border = "thin solid gray";
            square.style.height = "16px";
            square.style.width = "16px";
            container.appendChild(square);
        }
    }
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
        let columnElement = document.createElement("div");
        columnElement.style.display = "flex";
        columnElement.style.flexDirection = "row";
        for (let row = 0; row < 16; row++) {
            let square = document.createElement("div");
            square.classList.add("square");
            // square.style.display = "flex";
            // square.style.flexDirection = "row";
            square.style.border = "thick solid #0000FF";
            square.style.height = "50px";
            square.style.width = "50px";
            columnElement.appendChild(square);
            container.appendChild(columnElement);
        }
    }
}

function createSquaresByCssGrid() {
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(16, 0fr)";
    // container.style.gap = "0";
    // container.style.justifyContent = "start";
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
