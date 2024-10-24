import { CalculatorContextType } from "../calculatorContext";
import { CommandEnum } from "../commandFactory";

export default abstract class Command {
    value: CommandEnum | number;

    constructor(value: CommandEnum | number) {
        this.value = value;
    }

    execute(calculatorContext: CalculatorContextType): void {
        const isLastCharNumberOrParenthesis = (expr: string): boolean => {
            return /\d$|\)$|\($/.test(expr);
        };

        if (typeof this.value !== "number") {
            if (isLastCharNumberOrParenthesis(calculatorContext.expression)) {
                calculatorContext.setOperation(this.value);
            } else {
                calculatorContext.setExpression(
                    calculatorContext.expression.slice(0, -1) + this.value
                );
            }
        }
    }

    operation?(a: number|null, b: number|null): number;
}