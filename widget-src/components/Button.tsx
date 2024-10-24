const { widget } = figma;
const { useSyncedState, AutoLayout, Text, SVG, Input } = widget;
import Command from "../commands/command";
import buttonStyleInterface from "../styles/styleInterfaces/buttonStyleInterface";

interface ButtonProps extends Partial<AutoLayoutProps> {
    command: Command;
    buttonStyle: buttonStyleInterface
    buttonClick: Function;
    width?: number;
}

function Button(props: ButtonProps) {
    const { command, buttonStyle, buttonClick, width } = props;

    return (
        <AutoLayout
            onClick={() => buttonClick(command)}
            
            effect={buttonStyle?.effect}
            fill={buttonStyle?.fill}
            cornerRadius={8}
            strokeAlign="outside"
            spacing={10}
            padding={10}
            width={width || 49}
            horizontalAlignItems="center"
            verticalAlignItems="center"
            hoverStyle={{
                fill: buttonStyle?.hoverFill
            }}
        >
            <Text
                name="ButtonText"
                effect={[
                    {
                        type: "inner-shadow",
                        color: "#00000040",
                        offset: { x: -1, y: -1 },
                        blur: 1,
                    },
                    {
                        type: "inner-shadow",
                        color: "#FFFFFF40",
                        offset: { x: 1, y: 1 },
                        blur: 1,
                    },
                ]}
                fill="#FFFFFFE0"
                fontFamily="Figtree"
                fontSize={24}
                letterSpacing={2.4}
                fontWeight={600}
                textCase="upper"
            >
                {props.command?.value}
            </Text>
        </AutoLayout>
    );
}

export default Button;
