export default class Bowling {
    rolls: number[];

    constructor(_rolls: number[]) {
        this.rolls = _rolls;
    }

    /*
        The function can't solve for the last strike case. Implement later.
    */
    score() {
        const ARGUMENT_ERROR = new Error('Pins must have a value from 0 to 10');
        const LAND_ERROR = new Error('Pin count exceeds pins on the lane');
        const NOT_END_ERROR = new Error('Score cannot be taken until the end of the game');
        const OVER_GAME_ERROR = new Error('Should not be able to roll after game is over');
        const rollLen = this.rolls.length;
        let total = 0;
        let frameScore;
        let curScore;
        let scoreFramIndex = 0;

        if (rollLen < 10) {
            throw NOT_END_ERROR;
        }
        if (rollLen > 21) {
            throw OVER_GAME_ERROR;
        }

        for (let iFrame = 0; iFrame < 10; iFrame++) {
            curScore = this.rolls[scoreFramIndex];

            if (curScore < 0 || curScore > 10) throw ARGUMENT_ERROR;

            if (curScore === 10) {
                // Process for a strike.
                total += 10 + this.rolls[scoreFramIndex + 1] + this.rolls[scoreFramIndex + 2];
                scoreFramIndex += 1;
            } else {
                frameScore = curScore + this.rolls[scoreFramIndex + 1];
                if (frameScore > 10) {
                    throw LAND_ERROR;
                } else if (curScore + this.rolls[scoreFramIndex + 1] === 10) {
                    // Process for a spare.
                    total += 10 + this.rolls[scoreFramIndex + 2];
                    scoreFramIndex += 2;
                } else {
                    // Process for a normal frame.
                    total += curScore + this.rolls[scoreFramIndex + 1];
                    scoreFramIndex += 2;
                }
            }
        }
        return total;
    }
}