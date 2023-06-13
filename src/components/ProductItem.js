import { Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({data}) => {
    const navigate = useNavigate()
    return (
        <Col xl={3} lg={4} sm={3} style={{marginBottom: 10}} onClick={() => navigate(`/product/${data.id}`)}>
            <Card style={{width: '100%', height: '460px', objectFit: 'contain', cursor: 'pointer'}}>
                {data.image ? (
                    <Card.Img className='mt-1' style={{width: '100%', height: '360px', marginLeft: 'auto', marginRight: 'auto', objectFit: 'contain'}} variant="top" src={process.env.REACT_APP_IMG_URL + data.image + '.webp'} />
                ) : (
                    <Card.Img variant="top" src={process.env.REACT_APP_IMG_URL + data.image + '.webp'} />
                )}
                <Card.Body style={{height: 100, overflow: 'hidden', textAlign: 'center'}}>
                    <strong>{data.name}</strong>
                    <p>{data.price} тг.</p>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductItem