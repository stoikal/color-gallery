import hexToRgb from '../../utils/hexToRgb';

type color = {
  hex: string;
}

const colorSort = (a: color, b: color) => {
  const colorA = hexToRgb(a.hex);
  const colorB = hexToRgb(b.hex);
  const compare = (a: number, b: number) => a > b ? -1 : 1;

  if (colorA.red === colorB.red) {
    if (colorA.blue === colorB.blue) {
      if (colorA.green === colorB.green) {
        return 0
      } else {
        return compare(colorA.green, colorB.green)
      }
    } else {
      return compare(colorA.blue, colorB.blue)
    }
  } else {
    return compare(colorA.red, colorB.red)
  }
};

export default colorSort;