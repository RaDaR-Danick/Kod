import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import victorinox from "../assets/victorinox-logo.png"
import army from "../assets/victorinox.png"
import kitchen from "../assets/victorinox-kitchen.webp"
import go from "../assets/go.png";
import '../sections/style.css'

const Victorinox = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить швейцарские ножи Victorinox в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="Онлайн магазин перьевых ручек Victorinox в Алматы"/>
                <meta name="keywords" content="купить швейцарские армейские ножи Victorinox в Алматы, купить армейские ножи Victorinox в Алматы, купить кухонные ножи Victorinox в Алматы, 
                купить армейские ножи Victorinox в Казахстане, купить кухонные ножи Victorinox в Казахстане, швейцарские ножи Victorinox, Victorinox, ножи Victorinox в Алматы, ножи Victorinox, Victorinox, 
                армейские ножи, кухоные ножи, ножи" />
            </Helmet>
            <Card>
                <img src={ victorinox } alt="Купить швейцарские ножи Victorinox в Алматы"  width='30%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Компания Victorinox занимается производством и продажей уникальной высококачественной продукции для различных сфер жизни. В ассортимент входят 
                    швейцарские армейские ножи, кухонные ножи и столовые приборы, часы, туристическое снаряжение и парфюмерия. Головной офис компании находится в 
                    самом сердце Швейцарии — городе Ибах (округ Швиц). Именно здесь основатель компании Карл Эльзенер начал свой бизнес — производство ножевых изделий — 
                    в 1884 году, а несколько лет спустя разработал легендарный оригинальный швейцарский армейский нож.
                </p>
                <h4 style={{textAlign: 'center'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ army } alt="Купить швейцарские армейские ножи Victorinox в Алматы" width='100%' style={{marginBottom: 10}}/>
                    </Col>
                    <Col md={4}>
                        <img src={ kitchen } alt="Купить швейцарские кухоные ножи Victorinox в Алматы" width='100%'/>
                    </Col>
                </Row>
                <a href='/shop'><img class='scalecat' src={ go } alt="Купить швейцарские ножи Victorinox в Алматы" style={{width: '20%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} /></a>
            </Card>
        </Container>
    )
}

export default Victorinox