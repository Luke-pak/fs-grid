import { useRecoilValue } from 'recoil';
import { Row, Col } from 'react-bootstrap';
import { TileDemo } from '../../DemoData';

import TileColor from './TileColor';

const TileHeaderStyle = {
  color: 'white',
  fontSize: '1.5em',
  fontWeight: 'bold',
  padding: '0.3em',
};

const TileBodyStyle = {
  color: 'white',
  padding: '0.3em',
  height: '10em',
};

function DrawTitle() {
  const tileList = ['manufacture', 'running', 'facility', 'defect'];
  const data = useRecoilValue(TileDemo);

  return tileList.map(item => {
    const itemMap = data[item];
    const color = TileColor(item);

    return (
      <Col xs={6} style={{ padding: '0.5em 1em 0em' }}>
        <Row>
          {/* ==== Tile Header : START ==== */}
          <Col
            xs={12}
            style={{ ...TileHeaderStyle, backgroundColor: color.header }}
          >
            {itemMap.header ? itemMap.header : ''}
          </Col>
          {/* ==== Tile Header : END ==== */}

          {/* ==== Tile Body : START ==== */}
          <Col
            xs={12}
            style={{ ...TileBodyStyle, backgroundColor: color.body }}
          >
            <div>{itemMap.title1 ? itemMap.title1 : ''}</div>
            <div
              style={{ fontSize: '3em', lineHeight: '1em', fontWeight: 'bold' }}
            >
              {itemMap.data1 ? itemMap.data1 : ''}
            </div>
          </Col>
          {/* ==== Tile Body : END ==== */}
        </Row>
      </Col>
    );
  });
}
export default DrawTitle;
