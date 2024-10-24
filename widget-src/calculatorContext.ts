const { widget } = figma;
const { useSyncedState,  } = widget;
import CommandFactory, { CommandEnum, CommandOrNumber } from "./commandFactory";

export type CalculatorContextType = ReturnType<typeof CalculatorContext>;

export default function CalculatorContext() {
    const [expression, setExpression] = useSyncedState<string>('expression', '0');
  
    const handleNumber = (value: string): void => {
        console.log('handleNumber', value);

        if (expression.endsWith(')')) {
            let multiplyCommand = CommandFactory.getCommand(CommandEnum.MULTIPLY);
            setExpression(expression + `${multiplyCommand.value}${value}`);
        } else if (expression === '0') {
            setExpression(value);
        } else {
            setExpression(expression + value);
        }
    };

    const setOperation = (operation: string): void => {
        console.log('setting operation', operation);
        setExpression(expression + `${operation}`);
    };

    const calculate = (operation?: string): void => {
        let calculate_expression = expression;
        if (operation) {
            calculate_expression += operation;
        }
        console.log('Calculating expression:', calculate_expression);

        try {
            const compute = new Function(`return ${calculate_expression};`);
            const result = compute();
            setExpression(String(result));
        } catch (error) {
            console.error('Error evaluating expression:', error);
        }
    };


    const clear = (): void => {
        console.log('clearing');
        setExpression('0');
    };

    return {
        expression,
        handleNumber,
        setOperation,
        setExpression,
        calculate,
        clear,
    };
}
