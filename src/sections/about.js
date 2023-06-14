import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import fon from "../assets/fon.png";
import go from "../assets/go.png";

const About = () => {
    return (
        <Container className='mt-4'>
            <Card>
                <Row>
                <Col md={6}>
                        <div>
                            <a href='/shop'><img src={ fon } alt="Купить японские часы в Алматы" width='100%' style={{padding: '3%'}} /></a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <h2 style={{textAlign: 'justify', marginTop: '5%', color: '#1200ba', fontFamily: 'Book Antiqua', marginLeft: 10, fontWeight: 'bold'}}>Интернет-магазин "Aksessuary.KZ"</h2>
                            <p style={{textAlign: 'justify', fontSize: 17, width: '95%', marginLeft: 10}}>Является официальным дистрибьютором на территории Республики Казахстан 
                                представленных брендов. Мы несём полную ответственность за нашу продукцию и гарантируем её подлинность и качество. До того, как товар поступает к нам 
                                в магазин, мы тщательно отбираем каждую модель на предмет дизайна, качества материалов и механизма. Мы предлагаем только те часы, которые бы носили 
                                сами или дарили близким нам людям.
                                На каждом этапе выбора часов, мы будем рады помочь вам и проконсультировать. Нам не терпится ответить на все ваши вопросы и 
                                помочь найти часы, которыми вы с гордостью будете владеть долгие годы. Мы относимся серьезно к работе, в 
                                первую очередь, потому что любим наше дело.
                            </p>
                            <p style={{textAlign: 'justify', fontSize: 17, width: '95%', marginLeft: 10}}>Наш магазин, специализируется на продаже оригинальных аксессуаров более 20 лет.</p>
                            <a href='/shop'><img src={ go } alt="Купить швейцарские часы в Алматы" style={{width: '40%', marginLeft: '28%'}} /></a>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default About