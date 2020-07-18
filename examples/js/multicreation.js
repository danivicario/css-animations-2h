function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.onresize = () => {
    console.log(window.innerWidth);
};

window.onload = function () {
    if (window.innerWidth < 400) {
        console.log("this is too small, not create the design");
    } else {
        Array(50)
            .fill()
            .forEach((_, idx) => {
                let divDOMEl = document.createElement("div");
                divDOMEl.classList.add("generic");
                divDOMEl.classList.add(`instance-${idx}`);
                divDOMEl.style.width = `${window.innerWidth / 50}px`;
                divDOMEl.style.height = `${window.innerWidth / 50}px`;
                divDOMEl.style.backgroundColor = `rgba(${randomInt(100, 255)}, ${randomInt(100, 255)}, ${randomInt(100, 255)}, 1)`;

                document.body.appendChild(divDOMEl);
            });
    }
};

// Array(300)
//     .fill()
//     .forEach((_, idx) => {
//         let divDOMEl = document.createElement("div");
//         divDOMEl.classList.add("generic");
//         divDOMEl.classList.add(`instance-${idx}`);
//         divDOMEl.style.width = `${idx * 0.52}px`;
//         divDOMEl.style.height = `${idx * 0.52}px`;
//         divDOMEl.style.backgroundColor = `rgba(${randomInt(100, 255)}, ${randomInt(100, 255)}, ${randomInt(100, 255)}, 1)`;

//         document.body.appendChild(divDOMEl);
//     });
