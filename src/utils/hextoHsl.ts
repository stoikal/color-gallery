import hexToRgb from "./hexToRgb";

const hexToHsl = (hex: string) => {
  let { red, green, blue } = hexToRgb(hex);
  red /= 255;
  green /= 255;
  blue /= 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);

  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (!(max === min)) {
    const delta = max - min;
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch(max) {
      case red: h = (green - blue) / delta + (green < blue ? 6 : 0); break;
      case green: h = (blue - red) / delta + 2; break;
      case blue: h = (red - green) / delta + 4; break;
    }

    h /= 6;
  }

  h = Math.round(360 * h);
  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);

  return { r: red, g: green, b: blue, h, s, l }
};

export default hexToHsl;