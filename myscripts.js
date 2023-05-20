let container = document.querySelector(".container");
createGrid(16);
let paintType = "black";

let reset = document.querySelector("#reset");
reset.addEventListener("click", resetGrid);
document.querySelector("#black").addEventListener("click", selectButton);
document.querySelector("#rainbow").addEventListener("click", selectButton);
document.querySelector("#grayscale").addEventListener("click", selectButton);
document.querySelector("#eraser").addEventListener("click", selectButton);

function selectButton(e) {
    console.log(e.target.id);
    paintType = e.target.id;
    document.querySelectorAll("button").forEach(btn => btn.style.border = "none");
    e.target.style.border = "2px solid";
}

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
            if (color === "rgb(5, 5, 5)") return;
            let rgbArr = color.match(/\d{1,3}/g);
            if (!rgbArr) {return "rgb(230, 230, 230)"};
            if (rgbArr.every(e => (e - 5) % 25 === 0)) {
                return `rgb(${[...rgbArr.map(e => e - 25)]})`
            }
            return "rgb(230, 230, 230)";
        case "eraser":
            return "white";
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