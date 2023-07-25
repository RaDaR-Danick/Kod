import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import waterman from "../assets/waterman-logo.png"
import watermanpen from "../assets/waterman1.jpg"
import watermanp from "../assets/waterman2.jpg"
import go from "../assets/go.png";

const Waterman = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить перьевые ручки Waterman в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="Онлайн магазин перьевых ручек Waterman в Алматы"/>
                <meta name="keywords" content="купить ручки Waterman в Алматы, купить перьевые ручки Waterman в Алматы, купить перьевые ручки Waterman в Казахстане, 
                    перьевые ручки Waterman, Waterman, ручки Waterman в Алматы, ручки Waterman, Waterman, ручки, перьевые ручки" />
            </Helmet>
            <Card>
                <img src={ waterman } alt="Купить перьевые ручки Waterman в Алматы"  width='35%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 15}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Умело сделанная во Франции, каждая ручка Waterman вдохновенно вторит гению основателя Waterman, Льюиса Эдсона, изобретателя первой надежной авторучки в 1883. Перьевые 
                    ручки Waterman продолжают вызывать интерес у состоятельных людей. Для коллекционеров представляет ценность модель CF, которая была выпущена в 1953г. Дизайн 
                    канцелярской принадлежности, навеянный футуристическим проектом ракеты, совмещен с чудесной инновацией. В этой ручке впервые использовался картридж из пластика 
                    для чернил, применяемый для перьевых ручек и в наши дни.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Waterman Paris – канцелярские принадлежности, которые станут замечательным презентом для бизнес-партнеров, клиентов, коллег, директоров и ценных сотрудников. 
                    Изысканная работа вместе с премиальными материалами подчеркнет высокий статус обладателя изделия. Фирменный магазин ручек Waterman предлагает покупателям истинные 
                    произведения искусства. Важно отметить, что многие коллекционеры хранят редкие экземпляры уникальных изделий как драгоценности. Цена некоторых моделей доходит до 
                    сотен тысяч американских долларов.
                </p>
                <h4 style={{textAlign: 'center', color: 'red'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ watermanpen } alt="Купить ручки Waterman в Алматы" width='100%' style={{marginBottom: 10}}/>
                    </Col>
                    <Col md={4}>
                        <img src={ watermanp } alt="Купить перьевые ручки Waterman в Алматы" width='100%'/>
                    </Col>
                </Row>
                <a href='/shop'><img class='scalecat' src={ go } alt="Купить перьевые ручки Waterman в Алматы" style={{width: '20%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} /></a>
            </Card>
        </Container>
    )
}

export default Waterman