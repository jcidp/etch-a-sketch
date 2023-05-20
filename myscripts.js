let container = document.querySelector(".container");
createGrid(16);
let paintType = "black";

let reset = document.querySelector("#reset");
reset.addEventListener("click", resetGrid);
document.querySelector("#black").addEventListener("click", () => paintType = "black");
document.querySelector("#rainbow").addEventListener("click", () => paintType = "rainbow");
document.querySelector("#grayscale").addEventListener("click", () => paintType = "grayscale");

function createGrid(size) {
    for (let i=0; i<size**2; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = `${1/size*100}%`;
        square.style.height = `${1/size*100}%`;
        square.addEventListener("mouseover", e => {
            //e.target.style.backgroundColor = "blue";
            e.target.style.backgroundColor = setSquareColor(e.target.style.backgroundColor);
        })
        container.append(square);
    }
}

function setSquareColor(color) {
    switch (paintType) {
        case "black":
            return "black";
        case "rainbow":
            return `rgb(${[...randomRGB()]})`;
        case "grayscale":
            console.log(color);
            return ;
    }
}

function resetGrid() {
    let new_size = parseInt(prompt("How many squares do you want the grid to have at each side? Max 100 squares"));
    if (typeof new_size === "number" && new_size > 1 && new_size <= 100) {
        document.querySelectorAll(".square").forEach(square => square.remove());
        createGrid(new_size);
    }
}

function randomRGB() {
    return [1, 2, 3].map(e => e = Math.floor(Math.random() * 256));
}