import BasketList from '../components/BasketList.js'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet';

const Basket = () => {
    return (
        <Container>
            <Helmet>
                <title>Ваша корзина - Aksessuary.KZ</title>
                <meta name="description" content="Онлайн магазин часов"/>
            </Helmet>
            <h1 style={{textAlign: 'center'}}>Корзина</h1>
            <BasketList />
        </Container>
    )
}

export default Basket