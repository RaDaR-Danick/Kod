import Container from 'react-bootstrap/Container'

const Top = () => {
    return (
        <Container className="d-flex justify-content-between mt-3 pl-3 pr-3" style={{background: "#f3f3f3", height: 36}}>
            <div>
                <a href="tel:+77003069000" style={{fontSize: 17, fontWeight: 'bold', color: "#1200ba", textDecoration: "none"}}>+7 (700) 306-90-00</a>
                <a href="mailto:radar-daniyar@mail.ru" style={{fontSize: 20, color: "#1200ba", textDecoration: "none", fontWeight: 'bold'}}>, radar-daniyar@mail.ru |</a>
                <a style={{color: "#1200ba", fontSize: 17, fontWeight: 'bold'}}> ПН-ВС 09:00-20:00</a>
            </div>
            <div style={{marginTop: '5px'}}>
                <a style={{color: "#1200ba", fontWeight: 'bold' }}>СЕРВИС-ЦЕНТР: </a>
                <a href="tel:+77272727441" style={{fontSize: 17, fontWeight: 'bold', color: "#1200ba", textDecoration: "none"}}>+77272727441</a>
            </div>
        </Container>
    )
}

export default Top