const hexToRgb = (hex: string) => {
  const red = hex.slice(1,3);
  const green = hex.slice(3,5);
  const blue = hex.slice(5,7);

  return {
    red: parseInt(red, 16),
    green: parseInt(green, 16),
    blue: parseInt(blue, 16),
  }
}

export default hexToRgb;