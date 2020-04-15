const btn = document.getElementById('changeColor');
const body = document.querySelector('body');
const colorCode = document.querySelector('#colorCode');
body.style.backgroundColor = randomColor();
colorCode.textContent = body.style.backgroundColor;




btn.addEventListener('click', () => {
    body.style.backgroundColor = randomColor();
    colorCode.textContent = randomColor();
});

function randomColor() {
    // pick a "red" from 0 - 255
    const r = Math.floor(Math.random() * 256);
    // pick a green from 0 -255
    const g = Math.floor(Math.random() * 256);
    // pick a blue
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}