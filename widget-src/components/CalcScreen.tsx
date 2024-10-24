const { widget } = figma;
const { useSyncedState, AutoLayout, Text, SVG, Input } = widget;

function CalcScreen(props: Partial<AutoLayoutProps>) {
    return (
        <AutoLayout
            name="CalcScreen"
            effect={[
                {
                    type: "drop-shadow",
                    color: "#00000021",
                    offset: {
                        x: -2,
                        y: -2,
                    },
                    blur: 2,
                    spread: 1,
                    showShadowBehindNode: false,
                },
                {
                    type: "drop-shadow",
                    color: "#FFFFFF21",
                    offset: {
                        x: 2,
                        y: 2,
                    },
                    blur: 2,
                    spread: 1,
                    showShadowBehindNode: false,
                },
            ]}
            fill="#C2CECF"
            stroke="#5D5D5D"
            cornerRadius={4}
            spacing={10}
            padding={{
                vertical: 12,
                horizontal: 16,
            }}
            horizontalAlignItems="center"
            verticalAlignItems="center"
            width="fill-parent"
            {...props}
        >
            <Text
                name="display-value"
                fill="#000"
                horizontalAlignText="right"
                fontFamily="Space Mono"
                fontSize={32}
                letterSpacing={3.2}
                textCase="upper"
                width="fill-parent" 
            >
                {props.displayValue || '0'}
            </Text>
        </AutoLayout>
    );
}

// Export the component as default
export default CalcScreen;
