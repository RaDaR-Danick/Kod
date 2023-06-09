import { Container, Row, Col, Button, Image, Spinner, Table} from "react-bootstrap";
import { useEffect, useState, useContext, useRef } from "react";
import { fetchOneProduct, fetchProdRating, fetchCategoryProducts} from "../http/catalogAPI.js";
import { useParams } from "react-router-dom";
import { append } from "../http/basketAPI.js";
import { AppContext } from "../components/AppContext.js";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar} from "swiper";
import "swiper/css";

const Product = () => {
    SwiperCore.use([Autoplay, Navigation, Pagination]);
    const prevBtn = useRef();
    const nextBtn = useRef();
    const scrollbar = useRef();
    const { id } = useParams();
    const { basket } = useContext(AppContext);
    const [product, setProduct] = useState(null);
    const [rating, setRating] = useState(null);
    const [sameCollectionProducts, setSameCollectionProducts] = useState(null);

    useEffect(() => {
        fetchOneProduct(id)
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error fetching product:", error));
    
        fetchProdRating(id)
            .then((data) => setRating(data))
            .catch((error) => console.error("Error fetching product rating:", error));
    
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
            <Row className="mt-3 mb-3">
                <Col lg={4}>
                {product.image ? (
                    <Image
                    width={300}
                    src={process.env.REACT_APP_IMG_URL + product.image + ".webp"}
                    />
                ) : (
                    <Image width={300} src="http://via.placeholder.com/300" />
                )}
                </Col>
                <Col lg={8}>
                <h1>{product.name}</h1>
                <h3>{product.price} тг.</h3>
        
                <Button onClick={() => handleClick(product.id)}>
                    Добавить в корзину
                </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                <h4>Характеристики:</h4>
                <Table bordered hover size="sm">
                    <tbody>
                    <tr>{product.brand.name}</tr>
                    <tr>{product.mehanizm.name}</tr>
                    <tr>{product.gender.name}</tr>
                    <tr>{product.shape.name}</tr>
                    <tr>{product.material.name}</tr>
                    <tr>{product.glass.name}</tr>
                    <tr>{product.strap.name}</tr>
                    <tr>{product.power.name}</tr>
                    <tr>{product.water.name}</tr>
                    </tbody>
                </Table>
                </Col>
            </Row>
        
            <div>
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
                    slidesPerView: 4,
                    spaceBetween: 10,
                    autoplay: false,
                    },
                    1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    autoplay: false,
                    },
                    1300: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    autoplay: false,
                    },
                }}
                >
                {sameCollectionProducts?.map((product) => {
                    return (
                    <SwiperSlide key={product.id}>
                        <div>
                        {product.image ? (
                            <Image
                            width={300}
                            src={process.env.REACT_APP_IMG_URL + product.image + ".webp"}
                            />
                        ) : (
                            <Image width={300} src="http://via.placeholder.com/300" />
                        )}
                        <h2>{product.name}</h2>
                        <p>{product.full_name}</p>
                        </div>
                    </SwiperSlide>
                    );
                })}
                </Swiper>
            </div>
        </Container>
    );
};

export default Product;
