import { Container, Row, Col, Navbar } from 'react-bootstrap';
import Main from './Main/Main';
import SideMain from './Side/SideMain';

function App() {
  return (
    <div className="App">
      <Navbar style={{ backgroundColor: '#142d58' }}>
        <Navbar.Brand href="#home" style={{ color: 'white' }}>
          Factory Salad
        </Navbar.Brand>
      </Navbar>

      <Container style={{ height: '94.2vh' }} fluid>
        <Row className={'h-100'}>
          <Col xl="3" style={{ backgroundColor: '#3b3e43' }}>
            <SideMain />
          </Col>
          <Col xl="9" style={{ backgroundColor: '#292d33' }}>
            <Main />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
