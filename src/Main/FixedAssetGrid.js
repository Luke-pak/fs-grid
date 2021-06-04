import { useRecoilValue } from 'recoil';
import ReactGridLayout from 'react-grid-layout';
import { Row, Col, Container } from 'react-bootstrap';

import FixedAssetContent from './FixedAssetContent';
import FontColor from './content/FontColor';

import { Demo } from '../DemoData';

// Style ======================================
const ItemContainerStyle = {
  borderRadius: '15px',
  height: '80px',
  width: '80px',
  color: 'white',
  cursor: 'pointer',
};

const ItemTitleStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '0.7em',
  lineHeight: '2em',
};
// Style ======================================

function FixedAssetGrid() {
  const demo = useRecoilValue(Demo);

  // Status Bar ------------------------
  const ItemStatusColor = status => {
    const StatusColorMap = {
      run: 'green',
      stop: 'red',
      off: 'gray',
    };

    return FontColor(StatusColorMap[status]);
  };

  // Generate Item ------------------------
  const GenerateItem = () => {
    const ItemWrapperStyle = { backgroundColor: '#00000000', border: 'none' };
    const ItemBodyStyle = { height: '5em', padding: '0' };

    return demo.map(val => {
      return (
        <div key={val.i} id={val.i} data-grid={val} style={ItemWrapperStyle}>
          <Container
            className="justify-content-md-center p-0"
            style={{
              border: `8px solid ${ItemStatusColor(val.status)}`,
              ...ItemContainerStyle,
            }}
          >
            <Row className="justify-content-md-center">
              {/* ==== ITEM TITLE : START ==== */}
              <Col lg="12" style={ItemTitleStyle}>
                {val.name}
              </Col>
              {/* ==== ITEM TITLE : END ==== */}

              {/* ==== ITEM BODY : START ==== */}
              <Col lg="12" style={ItemBodyStyle}>
                <Row className="justify-content-md-center">
                  <FixedAssetContent data={val} />
                </Row>
              </Col>
              {/* ==== ITEM BODY : END ==== */}
            </Row>
          </Container>
        </div>
      );
    });
  };

  return (
    <ReactGridLayout
      className={'layout'}
      cols={70}
      rowHeight={40}
      width={1420}
      autoSize={false}
      margin={[1, 1]}
      preventCollision={true}
      verticalCompact={false}
      isDraggable={false}
      isResizable={false}
    >
      {GenerateItem()}
    </ReactGridLayout>
  );
}

export default FixedAssetGrid;
