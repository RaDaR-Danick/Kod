import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import clock from "../assets/clockcategories.jpg";
import pen from "../assets/pencategories.jpg";
import victorinox from "../assets/victorinoxcategories.jpg";
import Marquee from 'react-fast-marquee';

const Categories = () => {
    return (
        <Container className='mt-4'>
            <Card style={{padding: '2%'}}>
                <h1 style={{textAlign: 'center', fontWeight: 'normal'}}>Категории</h1>
                <Row>
                    <Col md={4}>
                        <a href='http://localhost:3000/shop?brand=1'><img class='scalecat' src={ clock } alt="Купить наручные часы в Алматы" style={{width: '100%', marginBottom: 10}} /></a>
                    </Col>
                    <Col md={4}>
                        <a href='http://localhost:3000/shop?brand=1'><img class='scalecat' src={ pen } alt="Купить перьевые ручки в Алматы" style={{width: '100%', marginBottom: 10}} /></a>
                    </Col>
                    <Col md={4}>
                        <a href='http://localhost:3000/shop?brand=1'><img class='scalecat' src={ victorinox } alt="Купить ножи Victorinox в Алматы" style={{width: '100%'}} /></a>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default Categories