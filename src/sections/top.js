import Container from 'react-bootstrap/Container'

const Top = () => {
    return (
        <Container className="d-flex justify-content-between mt-3 pl-3 pr-3" style={{background: "#f3f3f3", height: 36}}>
            <div className='hide-on-mobile' style={{paddingTop: 5}}>
                <a href="tel:+77003069000" style={{fontSize: 17, fontWeight: 'bold', color: "#1200ba", textDecoration: "none"}}>+7 (700) 306-90-00 |</a>
                <a style={{color: "#1200ba", fontSize: 17, fontWeight: 'bold'}}> ПН-ВС 09:00-20:00</a>
            </div>
            <div className='hide-on-mobile' style={{marginTop: '5px'}}>
                <a style={{color: "#1200ba", fontSize: 17, fontWeight: 'bold'}}>СЕРВИС-ЦЕНТР </a>
                <a href="tel:+77272727441" style={{fontSize: 17, fontWeight: 'bold', color: "#1200ba", textDecoration: "none"}}>+7 (727) 272-74-41</a>
            </div>
        </Container>
    )
}

export default Top