let root = document.documentElement;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

setInterval(() => {
    let xxx = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, 1)`;

    root.style.setProperty("--color", xxx);
}, 500);
