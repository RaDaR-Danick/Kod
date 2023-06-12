import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import telegram from '../assets/telegram.png'

const Footer = () => {
    return (
        <Container className='mt-4' style={{marginBottom: 30}}>
            <Card>
                <Row>
                    <Col md={4} style={{marginRight: 160, marginLeft: 10, marginTop: 20}}>
                        <img  src = { logo } alt = "Купить аксессуары в Алматы" style={{width: 170}}/><br /><br />
                        <p style={{textAlign: "justify", fontSize: 16, width: '95%'}}>Брендовые аксессуары — это стильные и полезные мелочи, которые дополняют Ваш образ. У нас Вы найдете подходящие аксессуары для любого случая. Если пользоваться этими штрихами умело и со вкусом, Вы легко поднимете свой стиль на новую высоту.</p>
                    </Col>
                    <Col md={2} style={{marginBottom: 20, marginTop: 20, marginLeft: 10}}>
                        <h4 style={{color: "#1200ba", marginBottom: 20}}>Навигация</h4>
                        <a href='/' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Главная</a><br />
                        <a href='/shop' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Каталог</a><br />
                        <a href='/shop/?gender=3' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Мужские часы</a><br />
                        <a href='/shop/?gender=2' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Женские часы</a><br />
                        <a href='/shop' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Ручки</a><br />
                        <a href='/shop' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Ножи</a>
                    </Col>
                    <Col md={2} style={{marginBottom: 20, marginTop: 20, marginLeft: 10}}>
                        <h4 style={{color: "#1200ba", marginBottom: 20}}>Информация</h4>
                        <a href='/about' style={{textDecoration: "none", fontSize: 14, color: "black"}}>О магазине</a><br />
                        <a href='/delivery' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Доставка и оплата</a><br />
                        <a href='/service' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Сервис-центр</a><br />
                        <a href='/contacts' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Контакты</a><br />
                    </Col>
                    <Col md={2} style={{marginLeft: 10}}>
                        <h4 style={{color: "#1200ba", marginBottom: 20, marginTop: 20}}>Контакты</h4>
                        <a href='href="tel:+77003069000"' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Телефон: +77003069000</a><br />
                        <a href="mailto:radar-daniyar@mail.ru" style={{textDecoration: "none", fontSize: 14, color: "black"}}>E-mail: radar-daniyar@mail.ru</a><br />
                        <div className='mt-3'>
                            <a href='/'><img  src = { instagram } alt = "Купить аксессуары в Алматы" style={{marginRight: 10}} /></a>
                            <a href='/'><img  src = { facebook } alt = "Купить аксессуары в Алматы" style={{marginRight: 10}} /></a>
                            <a href='//wa.me/77003069000' rel="noopener"><img  src = { whatsapp } alt = "Купить аксессуары в Алматы" style={{marginRight: 10}} /></a>
                            <a href='//t.me/RaDaR1204' rel="noopener"><img  src = { telegram } alt = "Купить аксессуары в Алматы" style={{marginRight: 10}} /></a>
                        </div>
                        <div className='mt-1'>
                            <a href='/' style={{textDecoration: "none", fontSize: 14, color: "black", fontWeight: "bold", whiteSpace: 'nowrap'}}>© 2023. Все права защищены</a>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default Footer