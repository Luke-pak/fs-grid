const ColorMap = {
  manufacture: { header: '#004a82', body: '#0070c0' },
  running: { header: '#008e40', body: '#00b050' },
  defect: { header: '#9e2600', body: '#cc3300' },
  facility: { header: '#d2a000', body: '#ffc000' },
};

const TileColor = type => {
  return ColorMap[type];
};

export default TileColor;
