import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import citizen from "../assets/citizen-logo.png"
import citizenwatch from "../assets/citizen1.jpg"
import citizenw from "../assets/citizen2.jpg"
import go from "../assets/go.png";

const Citizen = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить часы Citizen в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="Онлайн магазин наручных часов Citizen в Алматы"/>
                <meta name="keywords" content="купить часы Citizen в Алматы, купить наручные часы Citizen в Алматы, купить часы Citizen в Казахстане, 
                    наручные часы Citizen, Citizen, часы Citizen в Алматы" />
            </Helmet>
            <Card>
                <img src={ citizen } alt="Купить наручные часы Citizen в Алматы"  width='30%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Citizen-  пионер часового дела и инновационных технологий, основанный в 1918 году для создания часов. На протяжении более чем 100 лет мы оставались верны миссии 
                    создания часов для всех в мире, продвигая совершенство и творческий подход с глубоко укоренившимся уважением к мастерству. Как истинная производственная компания, 
                    мы обладаем комплексным и вертикально интегрированным процессом, который простирается от создания отдельных компонентов часов до их окончательной сборки.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Мы отстаиваем философию «Better start now» («Лучше начинается сейчас»), ищем и достигаем целей, которые улучшают нашу жизнь. Как мировая компания, мы несем 
                    ответственность за то, чтобы помочь нести  позитивные изменения и непрерывную эволюцию в нашем ремесле. К этому моменту уже более четырех десятилетий мы расширяем 
                    границы Eco-Drive, нашей запатентованной удостоенной наград технологии, поставляя доступный ассортимент часов с уникальными свойствами, которые необходимы миру.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Citizen признан мировым лидером в области передовых технологий. Начиная с самых тонких в мире часов, первых в мире профессиональных часов для подводного плавания 
                    с электронным датчиком глубины, до первых часов с распознаванием голоса. Citizen заслуженный рекордсмен и по настоящий день не имеет себе равных. Главная цель 
                    компании — сделать часы более удобным для каждого владельца.
                </p>
                <h4 style={{textAlign: 'center', color: 'red'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ citizenwatch } alt="Купить часы Citizen в Алматы" width='100%' style={{marginBottom: 10}}/>
                    </Col>
                    <Col md={4}>
                        <img src={ citizenw } alt="Купить японские наручные часы Citizen в Алматы" width='100%'/>
                    </Col>
                </Row>
                <a href='/shop?brand=3'><img class='scalecat' src={ go } alt="Купить японские наручные часы Citizen в Алматы" style={{width: '20%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} /></a>
            </Card>
        </Container>
    )
}

export default Citizen