import { Card, ListGroup } from 'react-bootstrap'
import { useContext } from 'react'
import { AppContext } from './AppContext.js'
import { observer } from 'mobx-react-lite'
import { useNavigate, createSearchParams } from 'react-router-dom'
import styled from "styled-components";
import UIDropdown from "./ui_dropdown.js";

const UserCicle = styled.div`
  margin-left: 12px;
  margin-top: 5px;
  display: flex;
  align-items: left;
  justify-content: left;
  width: 100%;
  height: 36px;
  font-size: 18px;
  color: #000;
  cursor: pointer;
`;

const GlassBar = observer(() => {
    const { catalog } = useContext(AppContext)
    const navigate = useNavigate()

    const handleClick = (id) => {
        if (id === catalog.glass) {
            catalog.glass = null
        } else {
            catalog.glass = id
        }
        const params = {}
        if (catalog.category) params.category = catalog.category
        if (catalog.brand) params.brand = catalog.brand
        if (catalog.mehanizm) params.mehanizm = catalog.mehanizm
        if (catalog.gender) params.gender = catalog.gender
        if (catalog.shape) params.shape = catalog.shape
        if (catalog.material) params.material = catalog.material
        if (catalog.glass) params.glass = catalog.glass
        if (catalog.strap) params.strap = catalog.strap
        if (catalog.power) params.power = catalog.power
        if (catalog.water) params.water = catalog.water
        if (catalog.page > 1) params.page = catalog.page
        navigate({
            pathname: '/shop',
            search: '?' + createSearchParams(params),
        })
    }

    return (
        <Card>
            <UIDropdown
                render={(toggleShow) => <UserCicle onClick={toggleShow}>Стекло</UserCicle>}
                position={{
                    top: "41px",
                    left: "-1px",
                }}
            >
                {(toggleShow) => (
                    <ListGroup style={{width:'306px'}}>
                        {catalog.glasses.map(item =>
                            <ListGroup.Item
                                key={item.id}
                                active={item.id === catalog.glass}
                                onClick={() => handleClick(item.id)}
                                style={{cursor: 'pointer'}}
                            >
                                {item.name}
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                )}
            </UIDropdown>
        </Card>
    )
})

export default GlassBar