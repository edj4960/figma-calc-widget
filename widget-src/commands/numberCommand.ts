import { CalculatorContextType } from "../calculatorContext";
import Command from "./command";

export default class NumberCommand extends Command {
    constructor(number: number) {
        super(number);
    }

    execute(calculatorContext: CalculatorContextType): void {
        calculatorContext.handleNumber(this.value.toString());
    }
}
