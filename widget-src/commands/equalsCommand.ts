import { CalculatorContextType } from "../calculatorContext";
import { CommandEnum } from "../commandFactory";
import Command from "./command";

export default class EqualsCommand extends Command {
    constructor() {
        super(CommandEnum.EQUALS);
    }

    execute(calculatorContext: CalculatorContextType): void {
        calculatorContext.calculate();
    }
}