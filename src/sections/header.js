import MobileMenu from './mobileMenu.js'
import Container from 'react-bootstrap/Container'
import logo from '../assets/logo.png'
import login from '../assets/login.png'
import cart from '../assets/basket.png'
import panel from '../assets/panel.png'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../components/AppContext'
import { useContext } from 'react'
import NavBar from '../components/navigation/NavBar'
import Top from './top.js'
import { Col, Nav, Row } from 'react-bootstrap'

const Header = () => {
    const { user, basket } = useContext(AppContext)
    return (
        <Container>
            <MobileMenu />
            <Top />
            <Row className="mt-4">
                <Nav  className="ml-auto">
                    <Col style={{textAlign: 'center'}}>
                    <NavLink to="/" className="navbar-brand">
                        <img  src = { logo } alt = "Купить аксессуары в Алматы" />
                    </NavLink>
                    </Col>
                    {user.isAuth ? (
                        <Link to="/user" className="nav-link" style={{color: 'black',  padding: '0.5rem 0.2rem' }}><img  src = { login } alt = "Войти" style={{marginTop: -5}} /></Link>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link" style={{color: 'black',  padding: '0.5rem 0.2rem'}}><img  src = { login } alt = "Войти" style={{marginTop: -5}} /></Link>
                        </>
                    )} {user.isAdmin && (
                        <Link to="/admin" className="nav-link" style={{color: 'black',  padding: '0.5rem 0.2rem'}}><img  src = { panel } alt = "Панель управления" style={{marginTop: -5}} /></Link>
                    )}
                    <Link to="/basket" className="nav-link" style={{color: 'black',  padding: '0.5rem 0.2rem'}}>
                        <img  src = { cart } alt = "Корзина" style={{marginTop: -5}} />
                        {!!basket.count && <span>({basket.count})</span>}
                    </Link>
                </Nav>
            </Row>
            <NavBar className='mt-4' />
        </Container>
    )
}

export default Header