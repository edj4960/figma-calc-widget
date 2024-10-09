const { widget } = figma;
const { useSyncedState, AutoLayout, Text, SVG, Input } = widget;

// Define custom props for the button
interface ButtonProps extends Partial<AutoLayoutProps> {
    name: string;
    value: string;
    width: number;
    buttonClick: Function;
}

// Define the ButtonProperty1Default component with the custom props
function ButtonProperty1Default(props: ButtonProps) {
    const { value, name, width, ...restProps } = props;

    return (
        <AutoLayout
            name={name}
            onClick={() => props.buttonClick(props.value)}
            effect={[
                {
                    type: "inner-shadow",
                    color: "#00000014",
                    offset: { x: -8, y: -8 },
                    blur: 20,
                },
                {
                    type: "inner-shadow",
                    color: "#FFFFFF0D",
                    offset: { x: 8, y: 8 },
                    blur: 20,
                },
                {
                    type: "drop-shadow",
                    color: "#00000014",
                    offset: { x: 2, y: 2 },
                    blur: 8,
                    showShadowBehindNode: false,
                },
                {
                    type: "drop-shadow",
                    color: "#00000021",
                    offset: { x: 0, y: 0 },
                    blur: 2,
                    spread: 1,
                    showShadowBehindNode: false,
                },
            ]}
            fill="#5E5E5E"
            cornerRadius={8}
            strokeAlign="outside"
            spacing={10}
            padding={10}
            width={width} // Use the width prop
            horizontalAlignItems="center"
            verticalAlignItems="center"
            {...restProps} // Pass any additional props
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
                {value}
            </Text>
        </AutoLayout>
    );
}

// Export the component
export default ButtonProperty1Default;
