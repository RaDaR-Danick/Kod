import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
    return (
        <Navbar bg="white" variant="dark" className='mt-4'>
            <Container className="d-flex justify-content-center">
                <Nav className="ml-auto">
                    <NavLink to="/" className="nav-link" style={{color: 'black', paddingRight: '80px'}}>ГЛАВНАЯ</NavLink>
                    <NavLink to="/shop" className="nav-link" style={{color: 'black', paddingRight: '80px'}}>КАТАЛОГ</NavLink>
                    <NavLink to="/about" className="nav-link" style={{color: 'black', paddingRight: '80px'}}>О МАГАЗИНЕ</NavLink>
                    <NavLink to="/delivery" className="nav-link" style={{color: 'black', paddingRight: '80px'}}>ДОСТАВКА И ОПЛАТА</NavLink>
                    <NavLink to="/service" className="nav-link" style={{color: 'black', paddingRight: '80px'}}>СЕРВИС-ЦЕНТР</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
})

export default NavBar