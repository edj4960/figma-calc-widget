import { CommandEnum } from "../commandFactory";
import Command from "./command";

export default class MultiplyCommand extends Command {
    constructor() {
        super(CommandEnum.MULTIPLY);
    }

    operation(a: number, b: number): number {
        return a * b;
    }
}