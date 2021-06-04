import FontColor from './FontColor';

function TextData(data) {
  const originData = data.data;

  return (
    <div
      style={{
        fontSize: '1em',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: '1.7em',
        color: FontColor(originData.color),
      }}
    >
      {originData.datas ? originData.datas : ''}
    </div>
  );
}

export default TextData;
