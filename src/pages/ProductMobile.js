import { Container, Row, Col, Button, Image, Spinner, Card} from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { fetchOneProduct, fetchCategoryProducts} from "../http/catalogAPI.js";
import { useParams } from "react-router-dom";
import { append } from "../http/basketAPI.js";
import { AppContext } from "../components/AppContext.js";
import planet from "../assets/icon-planet.png";
import box from "../assets/icon-box.png";

const ProductMobile = () => {
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
            <Card className="mt-4" style={{padding: '2% 8%'}}>
                <Row>
                    <Col lg={6}>
                        {product.image ? (
                            <Image
                                width={300}
                                src={process.env.REACT_APP_IMG_URL + product.image + ".webp"}
                                style={{marginTop: 50}}
                            />
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
        </Container>
    );
};

export default ProductMobile;