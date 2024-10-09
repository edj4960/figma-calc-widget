const { widget } = figma;
const { useSyncedState, AutoLayout, Text, SVG, Input, Rectangle } = widget;
import CalcScreen from './CalcScreen';
import Button from './Button';

// Define the component and type the props
function Calculator(props: Partial<AutoLayoutProps>) {

    const [display, setDisplay] = useSyncedState('display', '0');
    const [previousValue, setPreviousValue] = useSyncedState('previousValue', null);
    const [operation, setOperation] = useSyncedState('operation', null);
    const [lastValue, setLastValue] = useSyncedState('lastValue', null);
    const [lastOperation, setLastOperation] = useSyncedState('lastOperation', null);

    const handleButtonClick = (value) => {
        // Check if the value is a number (0-9)
        if (!isNaN(value)) {
            handleNumberClick(value);
        }
        // Check if the value is an operation (+, -, *, /)
        else if (['+', '-', '*', '/', 'X'].includes(value)) {
            handleOperationClick(value);
        }
        // Check if the value is the equals sign (=)
        else if (value === '=') {
            handleEqualsClick();
        }
        // Check if the value is 'C' for clear
        else if (value === 'C') {
            handleClearClick();
        }
    };

    // Function to handle number input
    const handleNumberClick = (num) => {
        if (display === '0' || operation != null) {
            setDisplay(num);
        } else {
            setDisplay(display + num);
        }
    };

    // Function to handle operations
    const handleOperationClick = (op) => {
        if (previousValue === null) {
            setPreviousValue(display);
        }
        setOperation(op);
        // setDisplay('0');
    };

    // Function to handle calculation when '=' is clicked
    const handleEqualsClick = () => {
        let currentValue = parseFloat(display);

        if (previousValue !== null && operation !== null) {
            const previous = parseFloat(previousValue);

            let result = 0;
            switch (operation) {
                case '+':
                    result = previous + currentValue;
                    break;
                case '-':
                    result = previous - currentValue;
                    break;
                case '*':
                    result = previous * currentValue;
                    break;
                case '/':
                    result = previous / currentValue;
                    break;
                default:
                    return;
            }

            setDisplay(result.toString());
            setLastValue(currentValue);
            setLastOperation(operation);
            setPreviousValue(null);
            setOperation(null);
        } else if (lastValue !== null && lastOperation !== null) {
            // Repeat last operation if equal is pressed again
            let result = 0;
            switch (lastOperation) {
                case '+':
                    result = currentValue + lastValue;
                    break;
                case '-':
                    result = currentValue - lastValue;
                    break;
                case '*':
                    result = currentValue * lastValue;
                    break;
                case '/':
                    result = currentValue / lastValue;
                    break;
                default:
                    return;
            }
            setDisplay(result.toString());
        }
    };

    // Function to handle clear operation
    const handleClearClick = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
    };


    return (
        <AutoLayout
            name="Calculator"
            effect={[
                {
                    type: "inner-shadow",
                    color: "#00000014",
                    offset: { x: -10, y: -10 },
                    blur: 4,
                },
                {
                    type: "inner-shadow",
                    color: "#FFFFFF14",
                    offset: { x: 10, y: 10 },
                    blur: 4,
                },
            ]}
            fill={[
                {
                    type: "solid",
                    color: { r: 0, g: 0, b: 0, a: 1 },
                },
                {
                    type: "gradient-linear",
                    gradientHandlePositions: [
                        { x: 0, y: 0 },
                        { x: 1, y: 1 },
                        { x: 0.5, y: -0.246 },
                    ],
                    gradientStops: [
                        {
                            position: 0,
                            color: { r: 0.36, g: 0.36, b: 0.36, a: 1 },
                        },
                        {
                            position: 1,
                            color: { r: 0.36, g: 0.36, b: 0.36, a: 0.68 },
                        },
                    ],
                },
            ]}
            stroke="#50505057"
            cornerRadius={20}
            strokeWidth={3}
            strokeAlign="center"
            overflow="visible"
            direction="vertical"
            spacing={12}
            padding={32}
            width={322}
            horizontalAlignItems="center"
            {...props} // Pass any additional props
        >
            <Text
                name="TB-B100"
                fill="#FFFFFF73"
                width="fill-parent"
                horizontalAlignText="right"
                fontFamily="Jost"
                fontSize={13}
                letterSpacing={1.3}
                fontWeight={600}
                textCase="upper"
            >
                TB-B100
            </Text>

            {/* Main Calculation Area */}
            <AutoLayout
                name="mainCalcArea"
                overflow="visible"
                direction="vertical"
                spacing={32}
            >
                {/* Replace with your actual CalcScreen component */}
                <CalcScreen name="CalcScreen" displayValue={display} />

                {/* Buttons Area */}
                <AutoLayout
                    name="ButtonsArea"
                    overflow="visible"
                    spacing={16}
                    width={257}
                    horizontalAlignItems="center"
                >
                    <Button name="clearButton" value="C" buttonClick={handleButtonClick} width={49} />
                    <Button name="positivenegative" value="()" buttonClick={handleButtonClick} width={49} />
                    <Button name="percentageButton" value="%" buttonClick={handleButtonClick} width={49} />
                    <Button
                        name="divideButton"
                        value="/"
                        buttonClick={handleButtonClick}
                        effect={[
                            {
                                type: "inner-shadow",
                                color: "#00000014",
                                offset: { x: -8, y: -8 },
                                blur: 20,
                            },
                            {
                                type: "inner-shadow",
                                color: "#8C8B990D",
                                offset: { x: 8, y: 8 },
                                blur: 20,
                            },
                            {
                                type: "drop-shadow",
                                color: "#00000014",
                                offset: { x: 2, y: 2 },
                                blur: 8,
                            },
                            {
                                type: "drop-shadow",
                                color: "#00000021",
                                offset: { x: 0, y: 0 },
                                blur: 2,
                                spread: 1,
                            },
                        ]}
                        fill="#5B596E"
                        width={49}
                    />
                </AutoLayout>
                <AutoLayout
                    name="ButtonsArea"
                    overflow="visible"
                    spacing={16}
                    width={257}
                    horizontalAlignItems="center"
                >
                    <Button
                        name="sevenButton"
                        value='7'
                        buttonClick={handleButtonClick}
                        fill="#838383"
                        width={49}
                    />
                    <Button
                        name="eightButton"
                        value='8'
                        buttonClick={handleButtonClick}
                        fill="#838383"
                        width={49}
                    />
                    <Button
                        name="nineButton"
                        value='9'
                        buttonClick={handleButtonClick}
                        fill="#838383"
                        width={49}
                    />
                    <Button
                        name="multiplyButton"
                        value='X'
                        buttonClick={handleButtonClick}
                        effect={[
                            {
                                type: "inner-shadow",
                                color:
                                    "#00000014",
                                offset: {
                                    x: -8,
                                    y: -8,
                                },
                                blur: 20,
                            },
                            {
                                type: "inner-shadow",
                                color:
                                    "#8C8B990D",
                                offset: {
                                    x: 8,
                                    y: 8,
                                },
                                blur: 20,
                            },
                            {
                                type: "drop-shadow",
                                color:
                                    "#00000014",
                                offset: {
                                    x: 2,
                                    y: 2,
                                },
                                blur: 8,
                                showShadowBehindNode:
                                    false,
                            },
                            {
                                type: "drop-shadow",
                                color:
                                    "#00000021",
                                offset: {
                                    x: 0,
                                    y: 0,
                                },
                                blur: 2,
                                spread: 1,
                                showShadowBehindNode:
                                    false,
                            },
                        ]}
                        fill="#5B596E"
                        width={49}
                    />
                </AutoLayout>
                <AutoLayout
                    name="ButtonsArea"
                    overflow="visible"
                    spacing={16}
                    width={257}
                    horizontalAlignItems="center"
                >
                    <Button
                        name="fourButton"
                        value='4'
                        buttonClick={handleButtonClick}
                        fill="#838383"
                        width={49}
                    />
                    <Button
                        name="fiveButton"
                        value='5'
                        buttonClick={handleButtonClick}
                        fill="#838383"
                        width={49}
                    />
                    <Button
                        name="sixButton"
                        value='6'
                        buttonClick={handleButtonClick}
                        fill="#838383"
                        width={49}
                    />
                    <Button
                        name="minusButton"
                        value='-'
                        buttonClick={handleButtonClick}
                        effect={[
                            {
                                type: "inner-shadow",
                                color:
                                    "#00000014",
                                offset: {
                                    x: -8,
                                    y: -8,
                                },
                                blur: 20,
                            },
                            {
                                type: "inner-shadow",
                                color:
                                    "#8C8B990D",
                                offset: {
                                    x: 8,
                                    y: 8,
                                },
                                blur: 20,
                            },
                            {
                                type: "drop-shadow",
                                color:
                                    "#00000014",
                                offset: {
                                    x: 2,
                                    y: 2,
                                },
                                blur: 8,
                                showShadowBehindNode:
                                    false,
                            },
                            {
                                type: "drop-shadow",
                                color:
                                    "#00000021",
                                offset: {
                                    x: 0,
                                    y: 0,
                                },
                                blur: 2,
                                spread: 1,
                                showShadowBehindNode:
                                    false,
                            },
                        ]}
                        fill="#5B596E"
                        width={49}
                    />
                </AutoLayout>
                <AutoLayout
                    name="ButtonsArea"
                    overflow="visible"
                    spacing={16}
                    width={257}
                    horizontalAlignItems="center"
                >
                    <Button
                        name="oneButton"
                        value='1'
                        buttonClick={handleButtonClick}
                        fill="#838383"
                        width={49}
                    />
                    <Button
                        name="twoButton"
                        value='2'
                        buttonClick={handleButtonClick}
                        fill="#838383"
                        width={49}
                    />
                    <Button
                        name="threeButton"
                        value='3'
                        buttonClick={handleButtonClick}
                        fill="#838383"
                        width={49}
                    />
                    <Button
                        name="additionButton"
                        value='+'
                        buttonClick={handleButtonClick}
                        effect={[
                            {
                                type: "inner-shadow",
                                color:
                                    "#00000014",
                                offset: {
                                    x: -8,
                                    y: -8,
                                },
                                blur: 20,
                            },
                            {
                                type: "inner-shadow",
                                color:
                                    "#8C8B990D",
                                offset: {
                                    x: 8,
                                    y: 8,
                                },
                                blur: 20,
                            },
                            {
                                type: "drop-shadow",
                                color:
                                    "#00000014",
                                offset: {
                                    x: 2,
                                    y: 2,
                                },
                                blur: 8,
                                showShadowBehindNode:
                                    false,
                            },
                            {
                                type: "drop-shadow",
                                color:
                                    "#00000021",
                                offset: {
                                    x: 0,
                                    y: 0,
                                },
                                blur: 2,
                                spread: 1,
                                showShadowBehindNode:
                                    false,
                            },
                        ]}
                        fill="#5B596E"
                        width={49}
                    />
                </AutoLayout>
                <AutoLayout
                    name="ButtonsArea"
                    overflow="visible"
                    spacing={16}
                    width={257}
                    horizontalAlignItems="center"
                >
                    <Button
                        name="zeroButton"
                        value='0'
                        buttonClick={handleButtonClick}
                        fill="#838383"
                        width={81}
                    />
                    <Button
                        name="decimalButton"
                        value='.'
                        buttonClick={handleButtonClick}
                        width={49}
                    />
                    <Button
                        name="equalsButton"
                        value='='
                        buttonClick={handleButtonClick}
                        width={80}
                    />
                </AutoLayout>
                {/* TODO: Implement rectangle and position properly */}
                {/* <Rectangle
                    name="homeKeyEmboss"
                    effect={[
                        {
                            type: "inner-shadow",
                            color:
                                "#FFFFFF36",
                            offset: {
                                x: 1,
                                y: 1,
                            },
                            blur: 2,
                        },
                        {
                            type: "inner-shadow",
                            color:
                                "#00000014",
                            offset: {
                                x: -1,
                                y: -1,
                            },
                            blur: 2,
                        },
                    ]}
                    x={86}
                    y={172}
                    positioning="absolute"
                    fill="#8383838C"
                    stroke="#83838357"
                    cornerRadius={2}
                    strokeWidth={0.5}
                    strokeAlign="outside"
                    width={20}
                    height={2}
                /> */}
            </AutoLayout>
        </AutoLayout>
    );
}

// Export the component as default
export default Calculator;
