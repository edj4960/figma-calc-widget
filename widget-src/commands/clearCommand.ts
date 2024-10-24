import { CalculatorContextType } from "../calculatorContext";
import { CommandEnum } from "../commandFactory";
import Command from "./command";


export default class ClearCommand extends Command {
    constructor() {
        super(CommandEnum.CLEAR);
    }

    execute(calculatorContext: CalculatorContextType): void {
        calculatorContext.clear();
    }
}