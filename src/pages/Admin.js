import { Container, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { AppContext } from '../components/AppContext.js'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../http/userAPI.js'
import { Helmet } from "react-helmet"

const Admin = () => {
    const { user } = useContext(AppContext)
    const navigate = useNavigate()

    const handleLogout = (event) => {
        logout()
        user.logout()
        navigate('/login', {replace: true})
    }

    return (
        <Container>
            <Helmet>
                <title>Панель управления - Aksessuary.KZ</title>
                <meta name="description" content="Онлайн магазин часов"/>
            </Helmet>
            <h1>Панель управления</h1>
            <p>
                Это панель управления магазином для администратора
            </p>
            <ul>
                <li><Link to="/admin/orders">Заказы в магазине</Link></li>
                <li><Link to="/admin/brands">Бренды каталога</Link></li>
                <li><Link to="/admin/mehanizms">Типы механизмов</Link></li>
                <li><Link to="/admin/genders">Пол</Link></li>
                <li><Link to="/admin/shapes">Формы корпусов</Link></li>
                <li><Link to="/admin/materials">Материалы корпусов</Link></li>
                <li><Link to="/admin/glasses">Стекла</Link></li>
                <li><Link to="/admin/straps">Материал браслета/ремешка</Link></li>
                <li><Link to="/admin/powers">Запас хода</Link></li>
                <li><Link to="/admin/waters">Водонепроницаемость</Link></li>
                <li><Link to="/admin/collections">Коллекции брендов</Link></li>
                <li><Link to="/admin/catalogs">Товары каталога</Link></li>
            </ul>
            <Button onClick={handleLogout}>Выйти</Button>
        </Container>
    )
}

export default Admin