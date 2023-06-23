import { Navbar, Nav, Card, ListGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import './style.css'
import styled from "styled-components";
import UIDropdown from "../ui_dropdown.js";

const UserCicle = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  width: 100%;
  height: 36px;
  font-size: 18px;
  color: #000;
  cursor: pointer;
`;

const NavBar = observer(() => {
    return (
        <Card className="mb-4">
            <div class="hide-on-mobile">
                <Navbar bg="white" className='d-flex justify-content-center'>
                    <Nav className="ml-auto">
                        <NavLink to="/" className="link" style={{paddingRight: '80px', paddingTop: '10px', paddingBottom: '10px'}}>ГЛАВНАЯ</NavLink>
                        <UIDropdown
                            render={(toggleShow) => <UserCicle className='link' onClick={toggleShow} style={{paddingTop: '10px', paddingBottom: '10px'}}>КАТАЛОГ</UserCicle>}
                        >
                            {(toggleShow) => (
                                <Card style={{marginTop: '14px', width: '160px'}}>
                                    <ListGroup style={{width:'130px', background: "white"}}>
                                        <NavLink style={{paddingLeft: '10px'}} to="/shop?brand=2" className="link">ANNE KLEIN</NavLink>
                                        <NavLink style={{paddingLeft: '10px'}} to="/shop?brand=1" className="link">CALVIN KLEIN</NavLink>
                                        <NavLink style={{paddingLeft: '10px'}} to="/shop?brand=3" className="link">CITIZEN</NavLink>
                                        <NavLink style={{paddingLeft: '10px'}} to="/shop?brand=4" className="link">DIESEL</NavLink>
                                        <NavLink style={{paddingLeft: '10px'}} to="/service" className="link">LAMY</NavLink>
                                        <NavLink style={{paddingLeft: '10px'}} to="/shop?brand=6" className="link">ORIENT</NavLink>
                                        <NavLink style={{paddingLeft: '10px'}} to="/service" className="link">PARKER</NavLink>
                                        <NavLink style={{paddingLeft: '10px'}} to="/shop?brand=8" className="link">SWATCH</NavLink>
                                        <NavLink style={{paddingLeft: '10px'}} to="/victorinox" className="link">VICTORINOX</NavLink>
                                        <NavLink style={{paddingLeft: '10px'}} to="/service" className="link">WATERMAN</NavLink>
                                    </ListGroup>
                                </Card>
                            )}
                        </UIDropdown>
                        <NavLink to="/about" className="link" style={{paddingLeft: '80px', paddingRight: '80px', paddingTop: '10px', paddingBottom: '10px'}}>О МАГАЗИНЕ</NavLink>
                        <NavLink to="/delivery" className="link" style={{paddingRight: '80px', paddingTop: '10px', paddingBottom: '10px'}}>ДОСТАВКА И ОПЛАТА</NavLink>
                        <NavLink to="/service" className="link" style={{paddingRight: '80px', paddingTop: '10px', paddingBottom: '10px'}}>СЕРВИС-ЦЕНТР</NavLink>
                    </Nav>
                </Navbar>
            </div>
        </Card>
    )
})

export default NavBar