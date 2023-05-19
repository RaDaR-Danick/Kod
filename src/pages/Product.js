import { Container, Row, Col, Button, Image, Spinner, Table } from 'react-bootstrap'
import { useEffect, useState, useContext } from 'react'
import { fetchOneProduct, fetchProdRating } from '../http/catalogAPI.js'
import { useParams } from 'react-router-dom'
import { append } from '../http/basketAPI.js'
import { AppContext } from '../components/AppContext.js'

const Product = () => {
    const { id } = useParams()
    const { basket } = useContext(AppContext)
    const [product, setProduct] = useState(null)
    const [rating, setRating] = useState(null)

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
        fetchProdRating(id).then(data => setRating(data))
    }, [id])

    const handleClick = (productId) => {
        append(productId).then(data => {
            basket.products = data.products
        })
    }

    if (!product) {
        return <Spinner animation="border" />
    }

    return (
        <Container>
            <Row className="mt-3 mb-3">
                <Col lg={4}>
                    {product.image ? (
                        <Image width={300} src={process.env.REACT_APP_IMG_URL + product.image + '.webp'} />
                    ) : (
                        <Image width={300} src="http://via.placeholder.com/300" />
                    )}
                </Col>
                <Col lg={8}>
                    <h1>{product.name}</h1>
                    <h3>{product.price} тг.</h3>
                    
                    <Button onClick={() => handleClick(product.id)}>Добавить в корзину</Button>
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
        </Container>
    )
}

export default Product