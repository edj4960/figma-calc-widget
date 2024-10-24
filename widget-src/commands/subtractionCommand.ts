import { CommandEnum } from "../commandFactory";
import Command from "./command";

export default class SubstractionCommand extends Command {
    constructor() {
        super(CommandEnum.SUBTRACT);
    }

    operation(a: number, b: number): number {
        return a - b;
    }
}
