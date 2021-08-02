import hexToHsl from '../../utils/hextoHsl';

type color = {
  hex: string;
}

type filters = {
  red: boolean;
  green: boolean;
  blue: boolean;
  saturation: boolean;
}

const createFilterFn = (filters: filters) => ({ hex }: color) => {
  const { r, g, b, l } = hexToHsl(hex);
  const { red, blue, green, saturation } = filters;
  
  if (red && r < 0.5) {
    return false;
  }

  if (green && g < 0.5) {
    return false;
  }

  if (blue && b < 0.5) {
    return false;
  }

  if (saturation && l < 0.5) {
    return false;
  }

  return true;
}

export default createFilterFn;
