function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

class Spiral {
    constructor(xOrigin = 800, yOrigin = 600, iterations = 36 * 20) {
        let radius = 200;
        let angle = 0;

        Array(iterations)
            .fill()
            .forEach((notInUse, idx) => {
                let spiralItem = document.createElement("div");
                spiralItem.classList.add("spiral-item");

                angle += 10;
                let angleInRads = (angle * Math.PI) / 180;

                spiralItem.style.left = `${xOrigin + 200 + (angle / 10) * Math.cos(angleInRads)}px`;
                spiralItem.style.top = `${yOrigin + 200 + (angle / 10) * Math.sin(angleInRads)}px`;
                spiralItem.style.height = spiralItem.style.width = `${angle / 20}px`;
                spiralItem.style.backgroundColor = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, .25)`;
                // spiralItem.onmousemove = function () {
                //     this.style.opacity = `0`;
                // };

                spiralItem.onclick = function () {
                    console.log(`opening section ${idx}`);
                };

                document.body.appendChild(spiralItem);
            });
    }
}

new Spiral(window.innerWidth / 2 - 200, window.innerHeight / 2 - 200, 150);

// for (let i = 0; i < 1; i++) {
//     // new Spiral(randomInt(0, window.innerWidth), randomInt(0, window.innerHeight), randomInt(300, 900));
//     new Spiral(window.innerWidth / 2 - 200, window.innerHeight / 2 - 200, randomInt(800, 800));
// }

// class Spiral {
//     constructor(xOrigin = 800, yOrigin = 600, iterations = 36 * 20) {
//         let radius = 200;
//         let angle = 0;

//         Array(iterations)
//             .fill()
//             .forEach((_) => {
//                 let spiralItem = document.createElement("div");
//                 spiralItem.classList.add("spiral-item");

//                 angle += 30;
//                 let angleInRads = (angle * Math.PI) / 180;

//                 spiralItem.style.left = `${xOrigin + 200 + (angle / 10) * Math.cos(angleInRads)}px`;
//                 spiralItem.style.top = `${yOrigin + 200 + (angle / 10) * Math.sin(angleInRads)}px`;
//                 spiralItem.style.height = spiralItem.style.width = `${angle / 20}px`;
//                 spiralItem.style.backgroundColor = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, .25)`;
//                 spiralItem.onmousemove = function () {
//                     this.style.opacity = `0`;
//                 };

//                 document.body.appendChild(spiralItem);
//             });
//     }
// }

// for (let i = 0; i < 1; i++) {
//     // new Spiral(randomInt(0, window.innerWidth), randomInt(0, window.innerHeight), randomInt(300, 900));
//     new Spiral(window.innerWidth / 2 - 200, window.innerHeight / 2 - 200, randomInt(800, 800));
// }

// fetch("http://127.0.0.1:8080/svg/jewel.svg")
//     .then((j) => j.text())
//     .then((j, idx) => {
//         Array(36 * 1)
//             .fill()
//             .forEach((x, idx) => {
//                 let d = document.createElement("div");
//                 d.innerHTML = j;
//                 d.classList.add("jewel-copy");

//                 let angleRads = (Math.PI * idx * 10) / 180;

//                 let scale = randomFloat(1, 2);

//                 d.style.transform = `translate(${radius + idx * Math.cos(angleRads)}px,${radius + idx * Math.sin(angleRads)}px) scale(${1})`;

//                 d.style.filter = `hue-rotate(${randomInt(0, 360)}deg)`;
//                 d.style.left = `${window.innerWidth / 2}px`;
//                 d.style.top = `${window.innerHeight / 2}px`;
//                 d.style.opacity = 0;

//                 document.body.appendChild(d);
//             });

//         setTimeout(() => {
//             document.querySelectorAll(".jewel-copy").forEach((j, idx) => {
//                 let angleRads = (Math.PI * idx * 10) / 180;
//                 let r = randomInt(100, 300);
//                 let r2 = randomInt(100, 300);

//                 j.style.opacity = 1;
//                 j.style.transform = `translate(${r * Math.cos(angleRads)}px,${r2 * Math.sin(angleRads)}px) scale(${randomFloat(1, 3)})`;
//                 j.style.transition = `transform ${randomFloat(0.5, 1.5)}s, scale 2s, opacity 2s`;
//             });
//         }, 500);
//     });
