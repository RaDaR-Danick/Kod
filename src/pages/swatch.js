import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import swatch from "../assets/swatch-logo.jpg"
import swatchwatch from "../assets/swatch1.jpg"
import swatchw from "../assets/swatch2.jpg"
import go from "../assets/go.png";

const Swatch = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить часы Swatch в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="часы Swatch"/>
                <meta name="keywords" content="купить часы Swatch в Алматы, купить наручные часы Swatch в Алматы, купить часы Swatch в Казахстане, 
                    наручные часы Swatch, Swatch, часы Swatch в Алматы, часы Swatch, Swatch, часы, наручные часы, женские часы, мужские часы, швейчарские часы" />
            </Helmet>
            <Card>
                <img src={ swatch } alt="Купить наручные часы Swatch в Алматы"  width='40%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Швейцарское качество может быть вполне доступным! Доказательство этому — часы «Swatch». Яркие, стильные и необычные аксессуары станут изюминкой вашего образа, а 
                    надежный механизм выступит гарантией их долговечности.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Швейцарский бренд появился не так давно — в 1983 году. Компания была основана для разработки и выпуска часов, доступных широким слоям населения. Сократить затраты на 
                    производство позволили современные материалы. При этом качество и надежность остались на высоком уровне. Название Swatch расшифровывают по-разному: Swiss Watch — 
                    «швейцарские часы» и Second Watch — «вторые, повседневные». Сам бренд придерживается последнего утверждения. Его цель — выпускать доступные модели на каждый день.
                    Отличие в позиционировании состоит в том, что часы Swatch – это модный аксессуар, который можно менять каждый сезон, это не те дорогие варианты, которые покупают раз 
                    в 10 лет. Хотя они вполне прослужат так же долго и безотказно, при этом они более доступны и относятся скорее к категории Fashion, чем к предметам роскоши.
                </p>
                <h4 style={{textAlign: 'center', color: 'red'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ swatchwatch } alt="Купить часы Swatch в Алматы" width='100%' style={{marginBottom: 10}}/>
                    </Col>
                    <Col md={4}>
                        <img src={ swatchw } alt="Купить швецарские наручные часы Swatch в Алматы" width='100%'/>
                    </Col>
                </Row>
                <a href='/shop?brand=11'><img class='scalecat' src={ go } alt="Купить наручные часы Swatch в Алматы" style={{width: '20%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} /></a>
            </Card>
        </Container>
    )
}

export default Swatch