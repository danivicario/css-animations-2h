class Square {
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    constructor() {
        const divDOMEl = document.createElement("div");
        divDOMEl.style.backgroundColor = `rgba(${this.randomInt(0, 255)}, ${this.randomInt(0, 255)}, ${this.randomInt(0, 255)}, 1)`;
        // divDOMEl.style.background = `url(http://t1.gstatic.com/images?q=tbn:ANd9GcQQn6_Hz9zTckXYuOa1biiMhulnHv6pKtadAFcdg79yocrL3Y29) no-repeat`;
        // divDOMEl.style.backgroundSize = `cover`;
        divDOMEl.style.height = divDOMEl.style.width = `${this.randomInt(50, 250)}px`;
        divDOMEl.style.transform = `rotate(${this.randomInt(0, 360)}deg)`;

        divDOMEl.onclick = () => {
            divDOMEl.style.opacity = 0;
        };

        divDOMEl.onmouseover = () => {
            divDOMEl.style.opacity = 0;
            // divDOMEl.style.backgroundColor = `white`; //`rgba(${this.randomInt(0, 255)}, ${this.randomInt(0, 255)}, ${this.randomInt(0, 255)}, 1)`;
        };

        document.body.appendChild(divDOMEl);
    }
}
