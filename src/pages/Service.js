import { Card, Col, Row, Table } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import sws from "../assets/sws.webp";
import sws1 from "../assets/sws/sws1.png";
import sws2 from "../assets/sws/sws2.png";
import sws3 from "../assets/sws/sws3.png";
import sws4 from "../assets/sws/sws4.png";
import sws5 from "../assets/sws/sws5.png";
import sws6 from "../assets/sws/sws6.png";
import swsmap from "../assets/sws-map.png";

const Service = () => {
    return (
        <Container>
            <a href='https://sws.kz/'><img src={ sws } alt="Авторизованный сервисный центр в Казахстане - SWService" style={{width: '100%'}} /></a>
            <Card className='mt-4'>
                <h2 style={{textAlign: 'center'}}>Услуги</h2>
                <Row>
                    <Col md={4}>
                        <div style={{ display: 'flex'}}>
                            <a href='https://sws.kz/uslugi' target='_blank' style={{textAlign: 'center', color: 'black', textDecoration: 'none'}}>
                                <img src={ sws1 } alt="Мелкий ремонт наручных часов в Алматы - SWService" style={{width: '100%', padding: '2%', paddingLeft: '2%' }} />
                                <p>МЕЛКИЙ РЕМОНТ</p>
                            </a>
                             <a href='https://sws.kz/uslugi' target='_blank' style={{textAlign: 'center', color: 'black', textDecoration: 'none'}}>
                                <img src={ sws2 } alt="Замена стекла на наручных часах в Алматы - SWService" style={{width: '100%', padding: '2%'}} />
                                <p>ЗАМЕНА СТЕКЛА</p>
                            </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div style={{ display: 'flex' }}>
                            <a href='https://sws.kz/uslugi' target='_blank' style={{textAlign: 'center', color: 'black', textDecoration: 'none'}}>
                                <img src={ sws3 } alt="Ремонт ремешка наручных часов в Алматы - SWService" style={{width: '100%', padding: '2%'}} />
                                <p>РЕМОНТ РЕМЕШКА</p>
                            </a>
                            <a href='https://sws.kz/uslugi' target='_blank' style={{textAlign: 'center', color: 'black', textDecoration: 'none'}}>
                                <img src={ sws4 } alt="Проверка на гермитичность наручных часов в Алматы - SWService" style={{width: '100%', padding: '2%'}} />
                                <p>ГЕРМЕТИЧНОСТЬ</p>
                            </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div style={{ display: 'flex'}}>
                            <a href='https://sws.kz/uslugi' target='_blank' style={{textAlign: 'center', color: 'black', textDecoration: 'none'}}>
                                <img src={ sws5 } alt="Сложный ремонт наручных часов в Алматы - SWService" style={{width: '100%', padding: '2%'}} />
                                <p>СЛОЖНЫЙ РЕМОНТ</p>
                            </a>
                            <a href='https://sws.kz/uslugi' target='_blank' style={{textAlign: 'center', color: 'black', textDecoration: 'none'}}>
                                <img src={ sws6 } alt="Репассаж наручных часов в Алматы - SWService" style={{width: '100%', padding: '2%'}} />
                                <p>РЕПАССАЖ</p>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card className='mt-4'>
                <h2 style={{textAlign:'center'}}>Авторизованный сервисный центр в Казахстане</h2>
                <p style={{textAlign:'justify', padding: '2%'}}>
                    Авторизованный сервисный центр «SWService» — это команда профессиональных мастеров по ремонту часов. Мастера производят обслуживание и ремонт на самом высоком 
                    уровне, который соответствует всем стандартам заводов изготовителей. Оснащённый самым современным оборудованием и инструментом, что позволяет более точно проводить 
                    диагностику и исправление поломок. Все оборудование и инструменты были изготовлены в специализированных компаниях Швейцарии и Германии. Для контроля качества 
                    ежегодно проводится проверка квалификации сотрудников.
                </p>
                <p style={{textAlign:'justify', padding: '2%'}}>
                    Сотрудники имеют солидный опыт по ремонту и обслуживанию, а также ежегодно повышают свою квалификацию на заводах производителей. Накопленный за долгое время опыт, 
                    позволяет им ремонтировать даже такие сложные механизмы, как: сложные хронометры, хронографы, GMT. Вам без труда помогут выявить и устранить любой вид поломок, а также 
                    произвести стандартное профилактическое обслуживание.
                </p>
            </Card>
            <Card className='mt-4'>
                <Row>
                    <Col md={8}>
                        <div>
                            <a href='https://2gis.kz/almaty/firm/70000001025209569?m=76.941762%2C43.249454%2F16&utm_source=bigMap&utm_medium=widget&utm_campaign=firmsonmap' target='_blank'>
                                <img src={ swsmap } alt="Авторизованный сервисный центр в Казахстане - SWService" style={{padding: '2%', width: '100%'}} />
                            </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <Table bordered hover size="sm" height='200px' style={{fontSize: 18, marginTop: 20, paddingLeft: 10}}>
                            <tbody>
                                <tr>г. Алматы, Абылай хана 125</tr>
                                <tr>Телефон: <a href="tel:+77272727441" style={{fontWeight: 'bold', color: "#1200ba", textDecoration: "none"}} target='_blank'>+7 (727) 272 74 41</a></tr>
                                <tr>WhatsApp: <a href="//wa.me/77003069000" style={{fontWeight: 'bold', color: "#1200ba", textDecoration: "none"}} target='_blank'>+7 (776) 272 74 41</a></tr>
                                <tr>Почта : <a href="mailto:info@sws.kz" style={{fontWeight: 'bold', color: "#1200ba", textDecoration: "none"}}>info@sws.kz</a></tr>
                                <tr>Сайт: <a href="https://sws.kz/" style={{fontWeight: 'bold', color: "#1200ba", textDecoration: "none"}} target='_blank'>sws.kz</a></tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default Service