import { Container, Row, Col, Button, Image, Spinner, Card} from "react-bootstrap";
import { useEffect, useState, useContext, useRef } from "react";
import { fetchOneProduct, fetchCategoryProducts} from "../http/catalogAPI.js";
import { useParams } from "react-router-dom";
import { append } from "../http/basketAPI.js";
import { AppContext } from "../components/AppContext.js";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar} from "swiper";
import "swiper/css";
import planet from "../assets/icon-planet.png";
import box from "../assets/icon-box.png";
import { Helmet } from 'react-helmet';

const Product = () => {
    SwiperCore.use([Autoplay, Navigation, Pagination]);
    const prevBtn = useRef();
    const nextBtn = useRef();
    const scrollbar = useRef();
    const { id } = useParams();
    const { basket } = useContext(AppContext);
    const [product, setProduct] = useState(null);
    const [sameCollectionProducts, setSameCollectionProducts] = useState(null);

    useEffect(() => {
        fetchOneProduct(id)
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error fetching product:", error));
    
        fetchCategoryProducts(id)
            .then((data) => setSameCollectionProducts(data))
            .catch((error) => console.error("Error fetching same collection products:", error)
        );
    }, [id]);
    const handleClick = (productId) => {
        append(productId).then((data) => {
            basket.products = data.products;
        });
    };

    if (!product) {
        return <Spinner animation="border" />;
    }

    return (
        <Container>
            <Helmet>
                <title>Купить часы {product.name}</title>
                <meta name="description" content="Онлайн магазин наручных часов"/>
                <meta name="keywords" content="магазин швейцарских часов, магазин наручных часов, купить швейцарские часы, купить наручные часы в Алматы, наручные часы в Алматы, 
                    часы в Алматы, купить наручные часы, наручные часы, часы, часы Anne Klein в Алматы, часы Calvin Klein в Алматы, часы Orinet в Алматы, 
                    часы Citizen в Алматы, часы Diesel в Алматы, часы Swatch в Алматы" />
            </Helmet>
            <Card className="mt-4" style={{padding: '2% 8%'}}>
                <Row>
                    <Col lg={6}>
                        {product.image ? (
                            <Image width={300} src={process.env.REACT_APP_IMG_URL + product.image} style={{marginTop: 50}} />
                        ) : (
                            <Image width={300} src="http://via.placeholder.com/300" />
                        )}
                    </Col>
                    <Col lg={6} style={{textAlign: "left", marginTop: 20}}>
                        <h3>{product.name}</h3>
                        <h3>{product.price} тг.</h3>
                        <p>
                            <img src={ planet } alt="map" style={{width: '18px'}} /> Международная гарантия<br />
                            <img src={ box} alt="map" style={{width: '18px'}} /> Бесплатная доставка
                        </p>
                        <Button onClick={() => handleClick(product.id)}>
                            Добавить в корзину
                        </Button>
                        <div style={{marginTop: 40}}>
                            <p><b>Бренд:</b> {product.brand.name}</p>
                            <p><b>Тип механизма:</b> {product.mehanizm.name}</p>
                            <p><b>Пол:</b> {product.gender.name}</p>
                            <p><b>Форма корпуса:</b> {product.shape.name}</p>
                            <p><b>Материал корпуса:</b> {product.material.name}</p>
                            <p><b>Стекло:</b> {product.glass.name}</p>
                            <p><b>Материал ремешка/браслета:</b> {product.strap.name}</p>
                            <p><b>Запас хода:</b> {product.power.name}</p>
                            <p><b>Водонепроницаемость:</b> {product.water.name}</p>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card className="mt-4" style={{padding: '2%'}}>
                <div>
                    <h4 className="mb-4">Сопутствующие товары:</h4>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        modules={[Navigation, Scrollbar]}
                        autoplay={{ delay: 3000 }}
                        pagination={{ el: ".swiper-pagination", clickable: true }}
                        navigation={{
                            prevEl: prevBtn.current,
                            nextEl: nextBtn.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevBtn.current;
                        swiper.params.navigation.nextEl = nextBtn.current;
                        swiper.params.scrollbar.el = scrollbar.current;
                    }}
                    scrollbar={{
                        el: scrollbar,
                        draggable: true,
                    }}
                    breakpoints={{
                        600: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        autoplay: false,
                        },
                        1024: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        autoplay: false,
                        },
                        1300: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                        autoplay: false,
                        },
                    }}
                    >
                    {sameCollectionProducts?.map((product) => {
                        return (
                        <SwiperSlide key={product.id}>
                            <div>
                                <Card style={{width: 206, height: 250, objectFit: 'contain', cursor: 'pointer'}}>
                                    {product.image ? (
                                        <Card.Img className='mt-1' style={{width: 200, height: 240, marginLeft: 3, objectFit: 'contain'}} variant="top" src={process.env.REACT_APP_IMG_URL + product.image} />
                                    ) : (
                                        <Card.Img variant="top" src={process.env.REACT_APP_IMG_URL + product.image + '.webp'} />
                                    )}
                                </Card>
                                <p>{product.name}</p>
                            </div>
                        </SwiperSlide>
                        );
                    })}
                    </Swiper>
                </div>
            </Card>
        </Container>
    );
};

export default Product;