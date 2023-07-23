import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import diesel from "../assets/diesel-logo.jpeg"
import dieselnwatch from "../assets/diesel1.jpg"
import dieselw from "../assets/diesel2.jpg"
import go from "../assets/go.png";

const Diesel = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить часы Diesel в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="Онлайн магазин наручных часов Diesel в Алматы"/>
                <meta name="keywords" content="купить часы Diesel в Алматы, купить наручные часы Diesel в Алматы, купить часы Diesel в Казахстане, 
                    наручные часы Diesel, Diesel, часы Diesel в Алматы" />
            </Helmet>
            <Card>
                <img src={ diesel } alt="Купить наручные часы Diesel в Алматы"  width='40%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Итальянский бренд Diesel создаёт авангардные fashion-часы с выраженным футуристичным акцентом в дизайне. Нестандартная величина корпуса и броские, провокационные 
                    элементы циферблата делают часы бренда ярчайшей деталью имиджа. Компания экспериментирует и с техническим наполнением: в линейке часов Diesel присутствуют, к примеру, 
                    модели с несколькими механизмами. Отточенный стиль сочетается с функциональностью и надёжностью, необходимыми для активного ритма жизни.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Изначально бренд Diesel был создан как новая линейка одежды, доступной для широкого круга свободной, модной и раскованной молодежи во всем мире. Но, как это 
                    часто бывает, одежда – только часть образа, а образ тяготеет к полноте и завершенности. Поэтому бренд охватили аксессуары, которые вписывались в единую тенденцию 
                    стиля. Часы просто стали логическим продолжением линейки аксессуаров, выпускаемых Diesel.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    В наши дни часы этого бренда представлены широким выбором моделей женских и мужских часов. Крупный корпус, широкий браслет или ремешок смотрятся дерзко и броско. 
                    Практически каждая модель имеет яркий акцент в виде необычного решения циферблата, оформления цифр или меток, индикаторов. Смелое использование различных материалов 
                    и фактур характерно и для более классических моделей. Это все призвано к одному – выделить владельца часов из толпы, придать его образу привкуса бунтарства и 
                    оригинальности, вызова и разрушения рамок обыденности.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    При этом часы выполнены по самым высоким и строгим нормам, которые приняты в компании-производителе – а это известный американский бренд Fossil, работающий по 
                    лицензии. Такое сочетание не может не вызывать искреннее желание иметь эти часы на своей руке.
                </p>
                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px'}}>
                    Часы Diesel – яркая индивидуальность и высокое качество.
                </p>
                <h4 style={{textAlign: 'center', color: 'red'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ dieselnwatch } alt="Купить часы Diesel в Алматы" width='92%'/>
                    </Col>
                    <Col md={4}>
                        <img src={ dieselw } alt="Купить наручные часы Diesel в Алматы" width='100%'/>
                    </Col>
                </Row>
                <a href='/shop?brand=5'><img class='scalecat' src={ go } alt="Купить наручные часы Diesel в Алматы" style={{width: '20%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} /></a>
            </Card>
        </Container>
    )
}

export default Diesel