import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import ck from "../assets/ck-logo.png"
import calvink from "../assets/calvinklein.png"
import calvinklein from "../assets/calvinklein2.jpg"
import go from "../assets/go.png";

const CK = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить часы Calvin Klein в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="Онлайн магазин наручных часов Calvin Klein в Алматы"/>
                <meta name="keywords" content="купить часы Calvin Klein в Алматы, купить наручные часы Calvin Klein в Алматы, купить часы Calvin Klein в Казахстане, 
                    наручные часы Calvin Klein, Calvin Klein, часы Calvin Klein в Алматы" />
            </Helmet>
            <Card>
                <img src={ ck } alt="Купить часы Calvin Klein в Алматы"  width='35%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 15}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    В 1997 году, дизайнерский мир знаменитого американского экспериментатора Calvin Klien пополнился именным часовым брендом, а самый мощный швейцарский концерн 
                    Swatch Group наконец-то стал устойчивой пирамидой, представленной тремя самодостаточными марками часов. Удачно скомбинировать новаторский урбанистический стиль 
                    от Calvin Klein и швейцарские часовые традиции оказалось, сделать из всего этого стильное решение простых идей, под силу дизайнеру Arlette Emch, которая возглавила 
                    компанию cK Watches & Jewelry Co. Ltd. Устойчивая популярность часового бренда Calvin Klein прежде всего опирается на многомиллионную аудиторию ценителей дизайнерской 
                    одежды, белья, аксессуаров, ювелирных украшений и парфюма cK, а безукоризненность швейцарского качества и безупречная репутация монстра Swatch Group, придаёт 
                    мужским и женским часам особый статус и фешенебельность. 
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Творцы хронографов Calvin Klein воистину мастера своего дела. Ведь они, не прибегая к показной ювелирной роскоши благородных металлов и драгоценных камней, вот уже 
                    который год, создают модели качественных часов, где оригинальная форма не вступает в конфликт с практичностью. Отмечено, что абсолютно все хронометры этой часовой марки 
                    идеально сочетаются с мужскими и женскими деловыми костюмами.
                </p>
                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px'}}>
                    Наручные часы Calvin Klein — стильное решение простых идей
                </p>
                <h4 style={{textAlign: 'center', color: 'red'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ calvink } alt="Купить часы Anne Klein в Алматы" width='100%'/>
                    </Col>
                    <Col md={4}>
                        <img src={ calvinklein } alt="Купить швейцарские часы Calvin Klein в Алматы" width='90%'/>
                    </Col>
                </Row>
                <a href='/shop?brand=4'><img class='scalecat' src={ go } alt="Купить наручные швейцарские часы Calvin Klein в Алматы" style={{width: '20%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} /></a>
            </Card>
        </Container>
    )
}

export default CK