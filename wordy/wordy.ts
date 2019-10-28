export class WordProblem {
    question: string;

    constructor(_question: string) {
        this.question = _question;
    }

    /*
        There 2 test cases failed:
        1. Test case for "power" is ignored.
        2. Test case 'What is -3 plus 7 multiplied by -2?' is an incorrect test case
            because after proccessed the operand is -3+7*(-2) = -17, -8 is incorrect.
    */
    answer() {
        const operationRegExp = /^What is [A-Za-z-?0-9 ]*[A-Za-z0-9][A-Za-z-?0-9 ]*\?$/;
        if (!operationRegExp.test(this.question)) throw ArgumentError;

        /*
            Start index is 7 because length of "What is " is 8.
        */
        const operationStr = this.question.substring(7, this.question.length - 1);
        const availableOperationStr = operationStr.replace(/\s/g, '').replace(/plus/g, '+').replace(/minus/g, '-').replace(/multipliedby/g, '*').replace(/dividedby/g, '/').replace(/--/g, '+');
        try {
            return eval(availableOperationStr);
        } catch (err) {
            throw ArgumentError;
        }
    }
}

export const ArgumentError = new Error("Argument is incorrect!!!");