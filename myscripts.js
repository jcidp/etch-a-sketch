let container = document.querySelector(".container");
createGrid(16);


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