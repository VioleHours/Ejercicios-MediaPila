let colors = [];
let pickedColor;
let numberOfSquares = 6;

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const h1 = document.getElementById("h1");
const resetButton = document.getElementById("reset");
const modeButtons = document.querySelectorAll("#stripe button");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    modeButtons.forEach(button => {
        button.addEventListener("click", function () {
            modeButtons.forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
            numberOfSquares = this.id === "easy" ? 3 : 6;
            reset();
        });
    });
}

function setupSquares() {
    squares.forEach(square => {
        square.addEventListener("click", function () {
            const clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "¡Correcto!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Jugar de nuevo";
            } else {
                this.classList.add("hide");
                messageDisplay.textContent = "Intentalo nuevamente";
            }
        });
    });
}

function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "Nuevos Colores";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#232323";

    squares.forEach((square, i) => {
        if (colors[i]) {
            square.style.display = "block";
            square.style.backgroundColor = colors[i];
            square.classList.remove("hide");
        } else {
            square.style.display = "none";
        }
    });
}

resetButton.addEventListener("click", reset);

function changeColors(color) {
    squares.forEach(square => {
        square.style.backgroundColor = color;
        square.classList.remove("hide");
    });
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
