class Squares {
    constructor(nSquares) {
        Array(nSquares)
            .fill()
            .map((_, idx) => {
                return new Square();
            });
    }
}
