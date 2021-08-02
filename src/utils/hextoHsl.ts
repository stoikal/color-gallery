import hexToRgb from "./hexToRgb";

const hexToHsl = (hex: string) => {
  const { red, green, blue } = hexToRgb(hex);
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (!(max === min)) {
    const delta = max - min;
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch(max) {
      case red: 
        h = (g - b) / delta + (g < b ? 6 : 0); 
        break;
      case green: 
        h = (b - r) / delta + 2; 
        break;
      case blue: 
        h = (r - g) / delta + 4; 
        break;
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