import hexToRgb from "./hexToRgb";

it('should return correct rgb value', () => {
  expect(hexToRgb('#000000')).toStrictEqual({
    red: 0,
    green: 0,
    blue: 0,
  });

  expect(hexToRgb('#FFFFFF')).toStrictEqual({
    red: 255,
    green: 255,
    blue: 255,
  });

  expect(hexToRgb('#C0392B')).toStrictEqual({
    red: 192,
    green: 57,
    blue: 43,
  });

  expect(hexToRgb('#3498DB')).toStrictEqual({
    red: 52,
    green: 152,
    blue: 219,
  });

  expect(hexToRgb('#27AE60')).toStrictEqual({
    red: 39,
    green: 174,
    blue: 96,
  });
})

it('should throw error if provided hex is invalid', () => {
  expect(() => hexToRgb('#000')).toThrowError();

  expect(() => hexToRgb('#FFFFFFF')).toThrowError();

  expect(() => hexToRgb('foobar')).toThrowError();
})