
export default interface calculatorStyleInterface {
    effect: WidgetJSX.Effect[]
    fill: string | WidgetJSX.Color | WidgetJSX.Paint | (WidgetJSX.SolidPaint | WidgetJSX.GradientPaint)[] | undefined
    stroke: string
}