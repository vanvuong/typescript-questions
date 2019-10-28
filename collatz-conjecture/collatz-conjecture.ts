class CollatzConjecture {
    static steps(number: number) {
        if (number <= 0) throw new Error("Only positive numbers are allowed");
        let steps = 0;
        while (number !== 1) {
            steps++;
            number = (number % 2 === 0) ? (number / 2) : (number * 3 + 1);
        }
        return steps;
    }
}

export default CollatzConjecture