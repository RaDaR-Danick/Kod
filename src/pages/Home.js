import Container from 'react-bootstrap/Container';
import CarouselBox from '../sections/CarouselBox.js';
import ClockMan from '../sections/clockman.js';
import ClockWoman from '../sections/clockwoman.js';
import Pen from '../sections/pen.js';
import Knife from '../sections/knife.js';
import About from '../sections/about.js'
import Categories from '../components/Categories.js';
import { Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <Container>
            <Helmet>
                <title>Интернет магазин наручных часов в Алматы - Aksessuary.KZ | Купить наручные часы</title>
                <meta name="description" content="Интернет магазин наручных часов в Алматы - Aksessuary.KZ | Купить наручные часы"/>
                <meta name="keywords" content="магазин швейцарских часов, магазин наручных часов, купить швейцарские часы, купить наручные часы в Алматы, наручные часы в Алматы, 
                    часы в Алматы, купить наручные часы, наручные часы, часы, купить Anne Klein в Алматы, купить Calvin Klein в Алматы, купить Orinet в Алматы, 
                    купить Citizen в Алматы, купить Diesel в Алматы, купить Swatch в Алматы" />
            </Helmet>
            <Row>
                <CarouselBox />
                <ClockMan />
                <ClockWoman />
                <Pen />
                <Knife />
                <About />
                <Categories />
            </Row>
        </Container>
    )
}

export default Home