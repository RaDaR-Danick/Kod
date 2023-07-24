import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import ak from "../assets/ak-logo.png"
import annek from "../assets/anneklein.jpg"
import anneklein from "../assets/anneklein2.jpg"
import go from "../assets/go.png";

const AK = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить часы Anne Klein в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="Онлайн магазин наручных часов Anne Klein в Алматы"/>
                <meta name="keywords" content="купить часы Anne Klein в Алматы, купить наручные часы Anne Klein в Алматы, купить часы Anne Klein в Казахстане, 
                    наручные часы Anne Klein, Anne Klein, часы Anne Klein в Алматы" />
            </Helmet>
            <Card>
                <img src={ ak } alt="Купить часы Anne Klein в Алматы"  width='35%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 15}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Наручные часы – это не только приспособление для того, чтобы всегда знать, который час, но и аксессуар, который подчеркнёт ваш стиль, вкус и статус. 
                    Даже мужские часы должны быть престижными и подходящими к костюму, а уж женские – тем более! Именно поэтому вашему вниманию предлагаются женские часы 
                    Anne Klein – воплощение изысканности и элегантности. Вы найдёте часы на любой вкус – и простые, и вычурные, и на стильном кожаном ремешке, и на 
                    браслете, украшенном бриллиантами или камнями от Swarovski. Корпус и стекло часов защищены от царапин и влаги
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Выбор невероятно богат: это и классические модели без излишеств, и современные часы, с которыми не стыдно явиться на любую дискотеку. Часы от Anne Klein уже много 
                    лет радуют покупательниц, сочетая красоту и элегантность со сравнительно невысокой ценой – покупка этих часов не разорит вас, зато взамен вы получите превосходное 
                    дополнение к любому вашему костюму либо прекрасный подарок кому-то на день рождения, Новый год или Восьмое марта – любая женщина будет в восторге!
                </p>
                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px'}}>
                    Женские часы – идеальный выбор для современной женщины, уверенной в своей неотразимости. Выберите именно свои часы – затмите всех вокруг!
                </p>
                <h4 style={{textAlign: 'center', color: 'red'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ annek } alt="Купить часы Anne Klein в Алматы" width='100%' style={{marginBottom: 10}}/>
                    </Col>
                    <Col md={4}>
                        <img src={ anneklein } alt="Купить наручные часы Anne Klein в Алматы" width='100%'/>
                    </Col>
                </Row>
                <a href='/shop?brand=2'><img class='scalecat' src={ go } alt="Купить наручные часы Anne Kleinx в Алматы" style={{width: '20%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} /></a>
            </Card>
        </Container>
    )
}

export default AK