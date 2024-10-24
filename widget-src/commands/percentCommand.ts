import { CalculatorContextType } from "../calculatorContext";
import { CommandEnum } from "../commandFactory";
import Command from "./command";

export default class PercentCommand extends Command {
    constructor() {
        super(CommandEnum.PERCENT);
    }

    execute(calculatorContext: CalculatorContextType): void {
        calculatorContext.calculate('/100');
    }

    operation(a: number, b: number): number {
        return b / 100;
    }
}
