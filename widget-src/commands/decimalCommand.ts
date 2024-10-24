import { CalculatorContextType } from "../calculatorContext";
import { CommandEnum } from "../commandFactory";
import Command from "./command";

export default class DecimalCommand extends Command {
    constructor() {
        super(CommandEnum.DECIMAL);
    }
}
