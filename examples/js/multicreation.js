function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Array(1500)
    .fill()
    .forEach((i, idx) => {
        let divDOMEl = document.createElement("div");
        divDOMEl.classList.add("generic");
        divDOMEl.classList.add("xs");
        divDOMEl.style.width = `${idx / 15}px`;
        divDOMEl.style.height = `${idx / 15}px`;
        document.body.appendChild(divDOMEl);
    });
