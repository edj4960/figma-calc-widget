import { CommandEnum } from "../commandFactory";
import Command from "./command";

export default class DivideCommand extends Command {
    constructor() {
        super(CommandEnum.DIVIDE);
    }

    operation(a: number, b: number): number {
        return a / b;
    }
}
