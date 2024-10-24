const { widget } = figma;
const { AutoLayout, Text, Rectangle } = widget;
import Command from "../commands/command";
import buttonStyleInterface from "../styles/styleInterfaces/buttonStyleInterface";

interface ButtonProps extends Partial<AutoLayoutProps> {
    command: Command;
    buttonStyle: buttonStyleInterface
    buttonClick: Function;
    width?: number;
    showEmbos?: boolean;
}

function Button({ showEmbos = false, ...props }: ButtonProps) {
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
            hoverStyle={buttonStyle?.hoverStyle}
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
            <Rectangle
                name="homeKeyEmboss"
                hidden={!showEmbos}
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
                x={14}
                y={41}
                positioning="absolute"
                fill="#8383838C"
                stroke="#83838357"
                cornerRadius={2}
                strokeWidth={0.5}
                strokeAlign="outside"
                width={20}
                height={2}
            />
        </AutoLayout>
    );
}

export default Button;
