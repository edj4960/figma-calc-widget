const { widget } = figma;
const { useSyncedState, AutoLayout, Text, SVG, Input } = widget;
// import CalcScreen from './components/CalcScreen';
import Calculator from "./components/Calculator";

function Widget() {
  return (
    <Calculator />
  )
}

widget.register(Widget);
