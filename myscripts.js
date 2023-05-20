let container = document.querySelector(".container");
createGrid(16);

let btn = document.querySelector("button");
btn.addEventListener("click", resetGrid);

function createGrid(size) {
    for (let i=0; i<size**2; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = `${1/size*100}%`;
        square.style.height = `${1/size*100}%`;
        square.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = "blue";
        })
        container.append(square);
    }
}

function resetGrid() {
    let new_size = parseInt(prompt("How many squares do you want the grid to have at each side? Max 100 squares"));
    if (typeof new_size === "number" && new_size > 1 && new_size <= 100) {
        document.querySelectorAll(".square").forEach(square => square.remove());
        createGrid(new_size);
    }
}