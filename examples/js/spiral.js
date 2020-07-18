function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

let radius = 200;

fetch("http://127.0.0.1:8080/svg/jewel.svg")
    .then((j) => j.text())
    .then((j, idx) => {
        Array(36 * 1)
            .fill()
            .forEach((x, idx) => {
                let d = document.createElement("div");
                d.innerHTML = j;
                d.classList.add("jewel-copy");

                let angleRads = (Math.PI * idx * 10) / 180;

                let scale = randomFloat(1, 2);

                d.style.transform = `translate(${radius + idx * Math.cos(angleRads)}px,${radius + idx * Math.sin(angleRads)}px) scale(${1})`;

                d.style.filter = `hue-rotate(${randomInt(0, 360)}deg)`;
                d.style.left = `${window.innerWidth / 2}px`;
                d.style.top = `${window.innerHeight / 2}px`;
                d.style.opacity = 0;

                document.body.appendChild(d);
            });

        setTimeout(() => {
            document.querySelectorAll(".jewel-copy").forEach((j, idx) => {
                let angleRads = (Math.PI * idx * 10) / 180;
                let r = randomInt(100, 300);
                let r2 = randomInt(100, 300);

                j.style.opacity = 1;
                j.style.transform = `translate(${r * Math.cos(angleRads)}px,${r2 * Math.sin(angleRads)}px) scale(${randomFloat(1, 3)})`;
                j.style.transition = `transform ${randomFloat(0.5, 1.5)}s, scale 2s, opacity 2s`;
            });
        }, 500);
    });
