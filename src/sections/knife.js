import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import victorinox from "../assets/victorinox-knife.jpg";
import MWN08623 from "../assets/categories/0.8623.MWN.webp"
import V0824126 from "../assets/categories/0.8241.26.webp"

const Knife = () => {
    return (
        <Container className='mt-4'>
            <Card>
                <Row>
                <Col md={6}>
                        <div>
                            <p style={{paddingBottom: 50, textAlign: 'center', fontSize: 17}}>Компания Victorinox занимается производством уникальной высококачественной продукции для различных сфер жизни.</p>
                            <img src={ MWN08623 } alt="Купить ручку Victorinox 1931494 в Алматы" width='47%' style={{marginRight: '3%'}}/>
                            <img src={ V0824126 } alt="Купить ручку Waterman Victorinox в Алматы" width='47%' style={{marginRight: '3%'}}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <a href='/shop/?gender=3'><img src={ victorinox } alt="Купить victorinox в Алматы" width='100%' /></a>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default Knife