document.addEventListener("DOMContentLoaded", function () {
    const colorBtn = document.getElementById("colorBtn");
    const addBoxBtn = document.getElementById("addBoxBtn");
    const removeBoxBtn = document.getElementById("removeBoxBtn");
    const boxContainer = document.getElementById("boxContainer");

    if (colorBtn) {
        colorBtn.addEventListener("click", function () {
            document.body.style.backgroundColor = getRandomColor();
        });
    }

    if (addBoxBtn) {
        addBoxBtn.addEventListener("click", function () {
            if (boxContainer) {
                const newBox = document.createElement("div");
                newBox.classList.add("box");
                newBox.style.backgroundColor = getRandomColor();
                boxContainer.appendChild(newBox);
            }
        });
    }

    if (removeBoxBtn) {
        removeBoxBtn.addEventListener("click", function () {
            if (boxContainer && boxContainer.lastChild) {
                boxContainer.removeChild(boxContainer.lastChild);
            }
        });
    }
});

function getRandomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${color.padStart(6, '0')}`;
}