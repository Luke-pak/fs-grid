import { Sparklines, SparklinesLine } from 'react-sparklines';

function Sparkline(data) {
  const originData = data.data;
  let datas = originData.datas;

  // 현재는 데이터가 없는게 많으므로 기본데이터를 넣어준다.
  // Random Generator
  if (!datas) {
    datas = [];
    while (datas.length < 20) {
      datas.push(getRandomInt(0, 50));
    }
  }

  // 데이터가 Array가 아닐 경우
  if (!datas || !(datas instanceof Array)) {
    return (
      <span style={{ color: 'red', padding: '0 1.5em', textAlign: 'center' }}>
        ERROR
      </span>
    );
  }

  return (
    <Sparklines
      data={datas}
      width={50}
      height={30}
      margin={2}
      style={{ padding: '0 1.5em' }}
    >
      <SparklinesLine color="green" />
    </Sparklines>
  );
}

// Random 함수
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

export default Sparkline;
