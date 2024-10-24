import { CalculatorContextType } from "../calculatorContext";
import CommandFactory, { CommandEnum } from "../commandFactory";
import Command from "./command";

export default class ParenthesisCommand extends Command {
    constructor() {
        super(CommandEnum.PARENTHESIS);
    }

    execute(calculatorContext: CalculatorContextType): void {
        let expression = calculatorContext.expression;
        const isLastCharNumber = (expr: string): boolean => {
            return /\d$/.test(expr);
        };

        if (expression === '0') {
            calculatorContext.setExpression('(');
        } else if (expression.endsWith('(') || expression.split('(').length > expression.split(')').length) {
            calculatorContext.setExpression(expression + ')');
        } else if (isLastCharNumber(expression)) {
            let multiplyCommand = CommandFactory.getCommand(CommandEnum.MULTIPLY);
            calculatorContext.setExpression(`${expression}${multiplyCommand.value}(`);
        } else {
            calculatorContext.setExpression(expression + '(');
        }
    };
}
