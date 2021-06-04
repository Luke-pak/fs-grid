import FontColor from './FontColor';

function NumData(data) {
  const originData = data.data;
  let number = 0;

  // 예제 데이터
  if (!originData.datas) number = getRandomInt(0, 1000);
  else number = originData.datas;

  let fontSize = '3em';
  let lineHeight = '0.7em';

  if (100 < number && number < 1000) {
    fontSize = '2em';
    lineHeight = '1em';
  } else if (1000 <= number) {
    fontSize = '1em';
    lineHeight = '2em';
  }

  return (
    <div
      style={{
        fontSize: fontSize,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: lineHeight,
        color: FontColor(originData.color),
      }}
    >
      {number}
    </div>
  );
}

// Random 함수
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

export default NumData;
