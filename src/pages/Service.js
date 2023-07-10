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
                            <a class='scale' href='https://sws.kz/uslugi' target='_blank' style={{textAlign: 'center', color: 'black', textDecoration: 'none'}}>
                                <img src={ sws1 } alt="Мелкий ремонт наручных часов в Алматы - SWService" style={{width: '100%', padding: '2%', paddingLeft: '2%' }} />
                                <p>МЕЛКИЙ РЕМОНТ</p>
                            </a>
                            <a class='scale' href='https://sws.kz/uslugi' target='_blank' style={{textAlign: 'center', color: 'black', textDecoration: 'none'}}>
                                <img src={ sws5 } alt="Сложный ремонт наручных часов в Алматы - SWService" style={{width: '100%', padding: '2%'}} />
                                <p>СЛОЖНЫЙ РЕМОНТ</p>
                            </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div style={{ display: 'flex' }}>
                            <a class='scale' href='https://sws.kz/uslugi' target='_blank' style={{textAlign: 'center', color: 'black', textDecoration: 'none'}}>
                                <img src={ sws3 } alt="Ремонт ремешка наручных часов в Алматы - SWService" style={{width: '100%', padding: '2%'}} />
                                <p>РЕМОНТ РЕМЕШКА</p>
                            </a>
                            <a class='scale' href='https://sws.kz/uslugi' target='_blank' style={{textAlign: 'center', color: 'black', textDecoration: 'none'}}>
                                <img src={ sws2 } alt="Замена стекла на наручных часах в Алматы - SWService" style={{width: '100%', padding: '2%'}} />
                                <p>ЗАМЕНА СТЕКЛА</p>
                            </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div style={{ display: 'flex'}}>
                            <a class='scale' href='https://sws.kz/uslugi' target='_blank' style={{textAlign: 'center', color: 'black', textDecoration: 'none'}}>
                                <img src={ sws6 } alt="Репассаж наручных часов в Алматы - SWService" style={{width: '100%', padding: '2%'}} />
                                <p>РЕПАССАЖ</p>
                            </a>
                            <a class='scale' href='https://sws.kz/uslugi' target='_blank' style={{textAlign: 'center', color: 'black', textDecoration: 'none'}}>
                                <img src={ sws4 } alt="Проверка на гермитичность наручных часов в Алматы - SWService" style={{width: '100%', padding: '2%'}} />
                                <p>ГЕРМЕТИЧНОСТЬ</p>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card className='mt-4' style={{padding: '2%'}}>
                <h2 style={{textAlign:'center'}}>Авторизованный сервисный центр в Казахстане</h2><br />
                <p style={{textAlign:'justify'}}>
                    Авторизованный сервисный центр «SWService» — это команда профессиональных мастеров по ремонту часов. Мастера производят обслуживание и ремонт на самом высоком 
                    уровне, который соответствует всем стандартам заводов изготовителей. Оснащённый самым современным оборудованием и инструментом, что позволяет более точно проводить 
                    диагностику и исправление поломок. Все оборудование и инструменты были изготовлены в специализированных компаниях Швейцарии и Германии. Для контроля качества 
                    ежегодно проводится проверка квалификации сотрудников.
                </p>
                <p style={{textAlign:'justify'}}>
                    Сотрудники имеют солидный опыт по ремонту и обслуживанию, а также ежегодно повышают свою квалификацию на заводах производителей. Накопленный за долгое время опыт, 
                    позволяет им ремонтировать даже такие сложные механизмы, как: сложные хронометры, хронографы, GMT. Вам без труда помогут выявить и устранить любой вид поломок, а также 
                    произвести стандартное профилактическое обслуживание.
                </p>
            </Card>
            <Card className='mt-4' style={{padding: '2%'}}>
                <h2 style={{textAlign: 'center'}}>Гаранития</h2><br />
                <p style={{textAlign: 'justify'}}>
                    Все часы находятся на официальной гарантии авторизованного сервис центра “SW Service”. Если по каким–либо причинам Вы хотите вернуть покупку, то мы примем обратно 
                    товар надлежащего качества в неповрежденной упаковке, с бирками и прилагающимися документами в течение 14 дней с момента покупки.
                </p>
                <p><b>Условия гарантийного обслуживания:</b>
                    <ul>
                        <li style={{textAlign: 'justify'}}>
                            Гарантийный срок на продукцию составляет 24 месяца со дня продажи. Настоящая гарантия действительна в случае предъявления правильно заполненного 
                            гарантийного талона и дефектного изделия.
                        </li>
                        <li style={{textAlign: 'justify'}}>
                            Гарантия распространяется на недостатки изделия, возникшие по вине изготовителя. Замена неисправных частей и связанная с этим работа производится бесплатно. 
                            Время нахождения изделия в ремонте определяется сервис центром индивидуально, в зависимости от сложности ремонта.
                        </li>
                    </ul>
                </p>
                <p><b>В течение гарантийного срока допускается и не является дефектом:</b>
                    <ul>
                        <li style={{textAlign: 'justify'}}>
                            Разрядка элемента питания (батарейки), установленного в изделие заводом изготовителем. Замена батарейки в течение гарантийного срока производится в 
                            сервисном центре бесплатно. Покупатель оплачивает только стоимость батарейки.
                        </li>
                        <li style={{textAlign: 'justify'}}>Износ ремешка, браслета, корпуса, кнопок, головок часов, или истирание их покрытия (позолоты, металлизации и т.п.) в процессе эксплуатации.</li>
                        <li style={{textAlign: 'justify'}}>Рассогласование часовой и минутной стрелок менее 0,5 минутного деления (при совмещении их в положении 12:00)</li>
                        <li style={{textAlign: 'justify'}}>Отклонение секундной стрелки от штрихов деления шкалы менее 0,5 секундного деления.</li>
                        <li style={{textAlign: 'justify'}}>Люфт часовой или минутной стрелки часов в пределах 0,5 секундного деления.</li>
                        <li style={{textAlign: 'justify'}}>
                            Отклонение технических характеристик изделия от указанных в технической документации предельных параметров, причины которых устранимы путем регулировки 
                            их настройки в условиях сервисного центра без замены деталей.
                        </li>
                    </ul>
                </p>
                <p><b>Гарантия не распространяется на изделия, имеющие следы нарушения эксплуатации:</b>
                    <ul>
                        <li style={{textAlign: 'justify'}}>
                            Следы ударов и механических повреждений: вмятины, зазубрины, отскочившие стрелки, риски, цифры, отсутствие или 
                            деформация заводной головки часов и т.п.
                        </li>
                        <li style={{textAlign: 'justify'}}>Следы несанкционированного вскрытия или попытки ремонта неуполномоченными на то сервисными центрами.</li>
                        <li style={{textAlign: 'justify'}}>
                            Повреждения (внешние и внутренние), вызванные любым механическим воздействием, ударными или вибрационными нагрузками, применением внешней силы к 
                            частям изделия, разбитое или выпавшее стекло, трещины, сколы, царапины, задиры поверхностей, деформации материалов и деталей, слом или выгибание оси 
                            переводной головки, отрыв ушек корпуса, для крепления браслета и т.п.
                        </li>
                        <li style={{textAlign: 'justify'}}>Повреждение изделия водой в результате нарушения правил эксплуатации. Часы с обозначением “Water resistance” не предназначены 
                            для плавания. 
                            Запрещается воздействовать на головку и кнопки часов находящихся в воде (кроме специальных часов для подводного плавания).
                        </li>
                        <li style={{textAlign: 'justify'}}>
                            Повреждение механизма календаря из-за перевода стрелок потребителем в период между 23:00 и 04:00 часами 
                            (когда задействован механизм автоматического изменения даты и дня недели).
                        </li>
                    </ul>
                </p>
                <p><b>Гарантийный ремонт не производится в следующих случаях:</b>
                    <ul>
                        <li style={{textAlign: 'justify'}}>Нарушение правил эксплуатации или употребление изделия не по назначению.</li>
                        <li style={{textAlign: 'justify'}}>
                            Отсутствует или неправильно заполнен гарантийный талон (отсутствует названия марки и модели, дата продажи, штамп торговой организации), 
                            или при предъявлении талона сомнительного происхождения.
                        </li>
                    </ul>
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