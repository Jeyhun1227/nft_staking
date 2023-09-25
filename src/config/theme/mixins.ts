export function getFluidTypography(
  minFontSize: number,
  maxFontSize: number,
  minViewportWidth: number,
  maxViewportWidth: number
) {
  return `calc(${minFontSize} + (${maxFontSize} - ${minFontSize}) * ((100vw - ${minViewportWidth}) / (${maxViewportWidth} - ${minViewportWidth})))`;
}
