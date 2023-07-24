import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import parker from "../assets/parker-logo.png"
import parkerpen from "../assets/parker1.jpg"
import parkerp from "../assets/parker2.jpg"
import go from "../assets/go.png";

const Parker = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить перьевые ручки Parker в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="Онлайн магазин перьевых ручек Parker в Алматы"/>
                <meta name="keywords" content="купить ручки Parker в Алматы, купить перьевые ручки Parker в Алматы, купить перьевые ручки Parker в Казахстане, 
                    перьевые ручки Parker, Parker, ручки Parker в Алматы" />
            </Helmet>
            <Card>
                <img src={ parker } alt="Купить перьевые ручки Parker в Алматы"  width='40%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    С 1888 года «PARKER» поддерживает свою репутацию пионера в создании совершенных ручек – как по технологии изготовления, так и по конструктивному решению. 
                    Сохраняя дух стремления к созданию более надежных перьевых ручек, который исповедовал Джордж Паркер, отрасль снова и снова подвергала себя неустанному 
                    технологическому самосовершенствованию и инновациям на основе исследования запросов потребителей изделий фирмы «PARKER».
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Ручки «PARKER» по своей конструкции уже свыше 125 лет занимают передовые позиции и являются самыми престижными ручками в мире. Традиционно славящиеся своей 
                    надежностью, легкостью при письме и превосходным дизайном, ручки «PARKER» всегда желанны потребителям. Компания продолжает опираться на свои прежние достижения 
                    при выпуске новых моделей и их оформлении, что станет стимулом для совершенствования ручек «PARKER» и в течение следующих 125 лет. Наше стремление к совершенству уже 
                    распространяется по всему деловому миру. Признанная всеми марка «PARKER» дает потребителю идеальную возможность узнать, насколько заботится о них производитель.
                </p>
                <h4 style={{textAlign: 'center', color: 'red'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ parkerpen } alt="Купить ручки Parker в Алматы" width='100%' style={{marginBottom: 10}}/>
                    </Col>
                    <Col md={4}>
                        <img src={ parkerp } alt="Купить перьевые ручки Parker в Алматы" width='100%'/>
                    </Col>
                </Row>
                <a href='/shop'><img class='scalecat' src={ go } alt="Купить перьевые ручки Parker в Алматы" style={{width: '20%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} /></a>
            </Card>
        </Container>
    )
}

export default Parker