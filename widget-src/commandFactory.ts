import AdditionCommand from "./commands/additionCommand";
import SubtractionCommand from "./commands/subtractionCommand";
import PercentCommand from "./commands/percentCommand";
import Command from "./commands/command";
import DivideCommand from "./commands/divideCommand";
import MultiplyCommand from "./commands/multiplyCommand";
import ParenthesisCommand from "./commands/parenthesisCommand";
import NumberCommand from "./commands/numberCommand";
import DecimalCommand from "./commands/decimalCommand";
import EqualsCommand from "./commands/equalsCommand";
import ClearCommand from "./commands/clearCommand";

export enum CommandEnum {
    ADD = '+',
    SUBTRACT = '-',
    MULTIPLY = '*',
    DIVIDE = '/',
    PERCENT = '%',
    CLEAR = 'C',
    PARENTHESIS = '()',
    DECIMAL = '.',
    EQUALS = '=',
}

export type CommandOrNumber = CommandEnum | number;

const CommandFactory = {
    getCommand: (operation: CommandOrNumber): Command => {
        if (typeof operation === "number") {
            return new NumberCommand(operation);
        }

        switch (operation) {
            case CommandEnum.ADD:
                return new AdditionCommand();
            case CommandEnum.SUBTRACT:
                return new SubtractionCommand();
            case CommandEnum.PERCENT:
                return new PercentCommand();
            case CommandEnum.DIVIDE:
                return new DivideCommand();
            case CommandEnum.MULTIPLY:
                return new MultiplyCommand();
            case CommandEnum.PARENTHESIS:
                return new ParenthesisCommand();
            case CommandEnum.DECIMAL:
                return new DecimalCommand();
            case CommandEnum.EQUALS:
                return new EqualsCommand();
            case CommandEnum.CLEAR:
                return new ClearCommand();
            default:
                // TODO: Address default case better
                return new NumberCommand(404);
        }
    }
};

export default CommandFactory