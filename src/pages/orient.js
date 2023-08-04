import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import orient from "../assets/orient-logo.png"
import orientwatch from "../assets/orient1.jpg"
import orientw from "../assets/orient2.jpg"
import go from "../assets/go.png";

const Orient = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить часы Orient в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="часы Orient"/>
                <meta name="keywords" content="купить часы Orient в Алматы, купить наручные часы Orient в Алматы, купить часы Orient в Казахстане, 
                    наручные часы Orient, Orient, часы Orient в Алматы, часы Orient, Orient, часы, наручные часы, женские часы, мужские часы, японские часы" />
            </Helmet>
            <Card>
                <img src={ orient } alt="Купить наручные часы Orient в Алматы"  width='30%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Всемирно известные японские часы Orient выпускает фирма-производитель Orient Watch Co Ltd., основанная еще в 1950 году в Токио. Ранее она носила название 
                    Тэта Equipment Co. Общая история, которой могут похвалиться часы Orient (Orient clock) начинается в 1901 году, с основанием часовым мастером Шогоро Йошидой 
                    своего магазина в Токио. Механизмы фирмы Orient не зря считаются одними из надежнейших в мире. Всем известно, что Orient – это надежные часы. Долгий срок службы 
                    у часов – это не только состояние механизма, а и качество внешнего облика часов. Большинство новых моделей Orient изготовляются из качественной нержавеющей стали, ее 
                    характеристики и особая технология по нанесению покрытия дают гарантию на нестареющий внешний вид часов еще много лет. Браслеты из той же нержавеющей стали прочны, 
                    надежны и удобны. Все наручные часы компании, даже спортивные часы, оснащены такими качественными браслетами. Достаточно всего одного нажатия чтобы застегнуть или 
                    расстегнуть их.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    При кажущейся внешней скромности и относительной дешевизне, японские часы зачастую скрывают внутри себя механизмы с очень сложной механикой. Например, можно выделить 
                    автоматическую модель World Timer - ее уникальный механизм FA02 позволит всегда точно знать текущее время всех мировых поясов. Рим, Нью-Йорк, Лондон, Каир - 24 крупнейших 
                    города будут вам доступны на этих часах Это позволяют два кольца, опоясывающих циферблат. На внешнем есть названия городов; на внутреннем – шкала в 24 часа. После 
                    установления правильного времени кольцами относительно Токио, механизм часов автоматически будет сам вращает внутреннее кольцо в сутки на один оборот, что и будет 
                    указывать правильное время по всему миру.
                </p>
                <h4 style={{textAlign: 'center', color: 'red'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ orientwatch } alt="Купить часы Orient в Алматы" width='100%' style={{marginBottom: 10}}/>
                    </Col>
                    <Col md={4}>
                        <img src={ orientw } alt="Купить японские наручные часы Orient в Алматы" width='100%'/>
                    </Col>
                </Row>
                <a href='/shop?brand=9'><img class='scalecat' src={ go } alt="Купить японские наручные часы Orient в Алматы" style={{width: '20%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} /></a>
            </Card>
        </Container>
    )
}

export default Orient