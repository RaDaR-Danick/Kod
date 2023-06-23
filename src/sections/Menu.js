import React from "react";
import { Container } from "react-bootstrap";

const Menu = ({header, items, active, setActive}) => {
    return (
        <Container>
            <div className={active ? 'menuActive' : 'menu'}>
                <div className="menu__content">
                    <div className="menu__header">{header}</div>
                    <ur>
                        {items.map (item =>
                        <li  style={{listStyleType: 'none', borderBottom: "1px solid #1200ba"}}>
                            <a href={item.href}>{item.value}</a>
                        </li>   
                        )}
                    </ur>
                </div>
            </div>
        </Container>
    )
}

export default Menu