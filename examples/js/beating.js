function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

for (let i = 1; i <= 5; i++) {
    const myCircle = document.querySelector(".circle-" + i);
    const radius = 200 + i * 50;
    const halfRadius = radius / 2;

    myCircle.style.height = `${radius}px`;
    myCircle.style.width = `${radius}px`;
    myCircle.style.left = `${window.innerWidth / 2 - halfRadius}px`;
    myCircle.style.top = `${window.innerHeight / 2 - halfRadius}px`;
}

window.onclick = function () {
    setInterval(() => {
        for (let i = 1; i <= 5; i++) {
            const myCircle = document.querySelector(".circle-" + i);
            let radius = 200 + i * 50;
            radius += randomInt(radius / 5, radius / 2);
            const halfRadius = radius / 2;
            myCircle.style.transform = `scale(${randomFloat(0.8, 1.2)})`;

            // myCircle.style.height = `${radius}px`;
            // myCircle.style.width = `${radius}px`;
            // myCircle.style.left = `${window.innerWidth / 2 - halfRadius}px`;
            // myCircle.style.top = `${window.innerHeight / 2 - halfRadius}px`;
        }
    }, 1000);
};
