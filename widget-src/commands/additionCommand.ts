import Command from "./command";
import { CommandEnum } from "../commandFactory";

export default class AdditionCommand extends Command {
    constructor() {
        super(CommandEnum.ADD);
    }

    operation(a: number, b: number): number {
        return a + b;
    }
}