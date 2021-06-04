import PushAlarm from './content/PushAlarm';
import Sparkline from './content/Sparkline';
import NumData from './content/NumData';
import TextData from './content/TextData';

function FixedAssetContent(obj) {
  const contentType = obj.data.contentType;
  const alarm = obj.data.alarm;

  console.log('origin data', obj.data);

  if (alarm) return <PushAlarm data={obj.data} />;
  else if (contentType === 'sparkline') return <Sparkline data={obj.data} />;
  else if (contentType === 'number') return <NumData data={obj.data} />;
  else if (contentType === 'text') return <TextData data={obj.data} />;
}

export default FixedAssetContent;
