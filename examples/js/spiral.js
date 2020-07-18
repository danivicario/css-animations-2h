fetch("http://127.0.0.1:8080/svg/jewel.svg")
    .then((j) => j.text())
    .then((j, idx) => {
        Array(20)
            .fill()
            .forEach((x) => {
                let d = document.createElement("svg");
                d.innerHTML = j;
                d.style.transform = `translate(100px,100px)`;
                document.body.appendChild(d);
            });
    });
