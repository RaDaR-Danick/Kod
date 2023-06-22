import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import pen from "../assets/pen.jpg";
import P1931494 from "../assets/categories/1931494.webp"
import S0637020 from "../assets/categories/S0637020.webp"

const Pen = () => {
    return (
        <Container className='mt-4'>
            <Card>
                <Row>
                <Col md={6}>
                        <div>
                            <a href='/shop/?gender=3'><img src={ pen } alt="Купить мужские часы в Алматы" width='100%' style={{boxShadow: '0 0 6px 6px #000' }} /></a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <p style={{paddingBottom: 50, paddingTop: 10, textAlign: 'center', fontSize: 17}}>Перьевые ручки Parker и Waterman известны каждому, кто ценит роскошные и качественные аксессуары, выполненные в стильном дизайне.</p>
                            <img class='scale' src={ P1931494 } alt="Купить ручку Parker 1931494 в Алматы" width='47%' style={{marginRight: '3%'}}/>
                            <img class='scale' src={ S0637020 } alt="Купить ручку Waterman 1931494 в Алматы" width='47%' style={{marginRight: '3%'}}/>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default Pen