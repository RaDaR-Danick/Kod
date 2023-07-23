import { Card, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from "react-helmet"
import ck from "../assets/marquee/ck.png";
import ak from "../assets/marquee/ak.png";
import swatch from "../assets/marquee/swatch.png";
import orient from "../assets/marquee/orient.png";
import citizen from "../assets/marquee/citizen.png";
import diesel from "../assets/marquee/diesel.png";
import parker from "../assets/marquee/parker.png";
import waterman from "../assets/marquee/waterman.png";
import lamy from "../assets/marquee/lamy.png";
import victorinox from "../assets/marquee/victorinox.png";
import Marquee from 'react-fast-marquee';

const About = () => {
    return (
        <Container>
            <Helmet>
                <title>О магазине - Aksessuary.KZ</title>
                <meta name="description" content="Онлайн магазин часов"/>
            </Helmet>
            <Card style={{padding: '2%'}}>
                <h4 style={{textAlign: 'center'}}>Дорогие друзья!</h4>
                <p> Интернет-магазин часов Aksessuary.KZ предлагает собственный товар, представленный 
                    в наших магазинах, а не занимаемся реализацией часов сторонних компаний, к которым мы не имеем отношение. Группа наших компаний является эксклюзивным 
                    представителем ведущих мировых часовых брендов на территории Средней Азии и Казахстана, а это значит, что мы всегда сможем предложить самые лучшие, выгодные и 
                    интересные решения для наших клиентов.
                </p>
                <p> Для реализации проекта была подобрана команда профессионалов с многолетним опытом в часовом бизнесе. Наши консультанты постоянно повышают уровень знаний о часах, 
                    проходят обучение на фабриках-изготовителях, следят за последними тенденциями в часовом мире. Модельный ряд часов и аксессуаров, предлагаемый компанией, насчитывает 
                    более 5 тысяч наименований и охватывает все возможные типы продукции, в том числе:
                    <ul>
                        <li>Мужские часы</li>
                        <li>Женские часы</li>
                        <li>Детские часы</li>
                        <li>Спортивные часы</li>
                        <li>Модные часы</li>
                        <li>Перьевые ручки Parker и Waterman</li>
                        <li>Швейцарские армейские ножи и столовые приборы</li>
                    </ul>
                </p>
            </Card>
            <Card className='mt-4' style={{padding: '2%', textAlign: 'center'}}>
                <h4 style={{fontWeight: 'normal'}}>Наша миссия – сделать все возможное для облегчения выбора и экономии времени и денег наших клиентов при покупке часов.</h4>
                <h4 style={{fontWeight: 'normal'}}>Желаем Вам приятных и ярких покупок!</h4>
            </Card>
            <Card className='mt-4'>
                <h1 style={{textAlign: 'center', fontWeight: 'normal'}}>Бренды</h1>
                <Marquee pauseOnHover speed={200} style={{margin: '2%', width: '96%', height: 360}}>
                    <div>
                        <a href='/calvin_klein'><img class='scale' src={ ck } alt="Купить часы Calvin Klein в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/anne_klein'><img class='scale' src={ ak } alt="Купить часы Anne Klein в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>    
                        <a href='/swatch'><img class='scale' src={ swatch } alt="Купить часы Swatch в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/orient'><img class='scale' src={ orient } alt="Купить часы Orient в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/citizen'><img class='scale' src={ citizen } alt="Купить часы Citizen в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/diesel'><img class='scale' src={ diesel } alt="Купить часы Diesel в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/parker'><img class='scale' src={ parker } alt="Купить ручку Parker в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/waterman'><img class='scale' src={ waterman } alt="Купить ручку Waterman в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/lamy'><img class='scale' src={ lamy } alt="Купить ручку Lamy в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/victorinox'><img class='scale' src={ victorinox } alt="Купить набор Victorinox в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                </Marquee>
            </Card>
        </Container>
    )
}

export default About