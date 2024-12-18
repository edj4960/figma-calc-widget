const { widget } = figma;
const { AutoLayout, Rectangle, Text } = widget;
import CalcScreen from "./CalcScreen";
import CalculatorContext from "../calculatorContext"
import CommandFactory, { CommandEnum } from "../commandFactory";
import Command from "../commands/command";
import Button from "./Button";
import { tbPack } from "../styles/tbPack";
import TbLogo from "./TbLogo";

function Calculator(props: Partial<AutoLayoutProps>) {

    const calculatorContext = CalculatorContext();
    const styles = tbPack;

    const onButtonClick = (command: Command) => {
        command.execute(calculatorContext);
    };

    return (
        <AutoLayout
            name="Calculator"
            effect={styles.calculator.effect}
            fill={styles.calculator.fill}
            stroke={styles.calculator.stroke}
            cornerRadius={20}
            strokeWidth={3}
            strokeAlign="center"
            overflow="visible"
            direction="vertical"
            spacing={12}
            padding={32}
            width={322}
            horizontalAlignItems="center"
            {...props}
        >
            <TbLogo />
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

            <AutoLayout
                name="mainCalcArea"
                overflow="visible"
                direction="vertical"
                spacing={16}
            >
                <CalcScreen name="CalcScreen" displayValue={calculatorContext.expression} />
                <Rectangle height={1} width={1} />

                <AutoLayout
                    name="ButtonsArea"
                    overflow="visible"
                    spacing={16}
                    width={257}
                    horizontalAlignItems="center"
                >
                    <Button command={CommandFactory.getCommand(CommandEnum.CLEAR)} buttonStyle={styles.buttons[0]} buttonClick={onButtonClick} />
                    <Button command={CommandFactory.getCommand(CommandEnum.PARENTHESIS)} buttonStyle={styles.buttons[0]} buttonClick={onButtonClick} />
                    <Button command={CommandFactory.getCommand(CommandEnum.PERCENT)} buttonStyle={styles.buttons[0]} buttonClick={onButtonClick} />
                    <Button command={CommandFactory.getCommand(CommandEnum.DIVIDE)} buttonStyle={styles.buttons[1]} buttonClick={onButtonClick} />
                </AutoLayout>
                <AutoLayout
                    name="ButtonsArea"
                    overflow="visible"
                    spacing={16}
                    width={257}
                    horizontalAlignItems="center"
                >
                    <Button command={CommandFactory.getCommand(7)} buttonStyle={styles.buttons[2]} buttonClick={onButtonClick} />
                    <Button command={CommandFactory.getCommand(8)} buttonStyle={styles.buttons[2]} buttonClick={onButtonClick} />
                    <Button command={CommandFactory.getCommand(9)} buttonStyle={styles.buttons[2]} buttonClick={onButtonClick} />
                    <Button command={CommandFactory.getCommand(CommandEnum.MULTIPLY)} buttonStyle={styles.buttons[1]} buttonClick={onButtonClick} />
                </AutoLayout>
                <AutoLayout
                    name="ButtonsArea"
                    overflow="visible"
                    spacing={16}
                    width={257}
                    horizontalAlignItems="center"
                >
                    <Button command={CommandFactory.getCommand(4)} buttonStyle={styles.buttons[2]} buttonClick={onButtonClick} />
                    <Button command={CommandFactory.getCommand(5)} buttonStyle={styles.buttons[2]} buttonClick={onButtonClick} showEmbos />
                    <Button command={CommandFactory.getCommand(6)} buttonStyle={styles.buttons[2]} buttonClick={onButtonClick} />
                    <Button command={CommandFactory.getCommand(CommandEnum.SUBTRACT)} buttonStyle={styles.buttons[1]} buttonClick={onButtonClick} />
                </AutoLayout>
                <AutoLayout
                    name="ButtonsArea"
                    overflow="visible"
                    spacing={16}
                    width={257}
                    horizontalAlignItems="center"
                >
                    <Button command={CommandFactory.getCommand(1)} buttonStyle={styles.buttons[2]} buttonClick={onButtonClick} />
                    <Button command={CommandFactory.getCommand(2)} buttonStyle={styles.buttons[2]} buttonClick={onButtonClick} />
                    <Button command={CommandFactory.getCommand(3)} buttonStyle={styles.buttons[2]} buttonClick={onButtonClick} />
                    <Button command={CommandFactory.getCommand(CommandEnum.ADD)} buttonStyle={styles.buttons[1]} buttonClick={onButtonClick} />
                </AutoLayout>
                <AutoLayout
                    name="ButtonsArea"
                    overflow="visible"
                    spacing={16}
                    width={257}
                    horizontalAlignItems="center"
                >
                    <Button command={CommandFactory.getCommand(0)} buttonStyle={styles.buttons[2]} buttonClick={onButtonClick} width={81} />
                    <Button command={CommandFactory.getCommand(CommandEnum.DECIMAL)} buttonStyle={styles.buttons[0]} buttonClick={onButtonClick} />
                    <Button command={CommandFactory.getCommand(CommandEnum.EQUALS)} buttonStyle={styles.buttons[0]} buttonClick={onButtonClick} width={80} />
                </AutoLayout>
                {/* TODO: Implement rectangle and position properly */}
                
            </AutoLayout>
        </AutoLayout>
    );
}

export default Calculator;