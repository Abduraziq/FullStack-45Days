document.getElementById("colorBtn").addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});

document.getElementById("addBoxBtn").addEventListener("click", function () {
    const boxContainer = document.getElementById("boxContainer");
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.style.backgroundColor = getRandomColor();
    boxContainer.appendChild(newBox);
});

document.getElementById("removeBoxBtn").addEventListener("click", function () {
    const boxContainer = document.getElementById("boxContainer");
    if (boxContainer.lastChild) {
        boxContainer.removeChild(boxContainer.lastChild);
    }
});

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
