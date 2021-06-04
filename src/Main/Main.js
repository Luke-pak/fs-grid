import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import FixedAssetGrid from './FixedAssetGrid';

function Main() {
  return (
    <>
      <TransformWrapper options={{ limitToBounds: false }}>
        <TransformComponent>
          <div style={{ width: '74vw', height: '94vh' }}>
            <FixedAssetGrid />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </>
  );
}

export default Main;
