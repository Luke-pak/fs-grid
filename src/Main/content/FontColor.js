const ColorMap = {
  green: '#009a28',
  red: '#d23e3e',
  gray: '#565656',
  blue: '#105aff',
};

const FontColor = fontColor => {
  console.log(fontColor, ColorMap[fontColor] ? ColorMap[fontColor] : 'white');
  return ColorMap[fontColor] ? ColorMap[fontColor] : 'white';
};

export default FontColor;
