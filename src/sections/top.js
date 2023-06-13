import Container from 'react-bootstrap/Container'

const Top = () => {
    return (
        <Container className="d-flex justify-content-between mt-3 pl-3 pr-3" style={{background: "#f3f3f3", height: 36}}>
            <div style={{paddingTop: 5}}>
                <a style={{color: "#1200ba", fontSize: 17, fontWeight: 'bold'}}>ПН-ВС 09:00-20:00</a>
            </div>
            <div style={{marginTop: '5px'}}>
                <a href="tel:+77003069000" style={{fontSize: 17, fontWeight: 'bold', color: "#1200ba", textDecoration: "none"}}>+7 (700) 306-90-00</a>
            </div>
        </Container>
    )
}

export default Top