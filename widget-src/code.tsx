const { widget } = figma;
const { useSyncedState, AutoLayout, Text, SVG, Input } = widget;
import Calculator from "./components/Calculator";

function Widget() {
  return (
    <Calculator />
  )
}

widget.register(Widget);
