// 3 char hex is considered invalid;
const isValidColorHex = (hex: string) => {
  const regex = /^#[0-9A-F]{6}$/i;
  return regex.test(hex);
};

export default isValidColorHex;