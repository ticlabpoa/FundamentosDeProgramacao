
document.addEventListener("DOMContentLoaded", function() {
    const colors = ["red", "green", "blue", "yellow", "purple", "orange", "black"];
    const buttonsContainer = document.getElementById("buttonsContainer");

    colors.forEach(function(color) {
        const button = document.createElement("button");
        button.textContent = color.toUpperCase(); // Converte o texto do botão par maisculo
        button.onclick = function() {
            changeColor(color);
        };
        buttonsContainer.appendChild(button);
    });
});

function changeColor(selectedColor) {
    const colorBox = document.getElementById("colorBox");
    colorBox.style.backgroundColor = selectedColor;
}
