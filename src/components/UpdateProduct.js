import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { fetchOneProduct, updateProduct, fetchBrands, fetchMehanizms, fetchGenders, 
    fetchShapes, fetchMaterials, fetchGlasses, fetchStraps, fetchPowers, fetchWaters, fetchCollections
} from '../http/catalogAPI.js'
import { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import UpdateProperties from './UpdateProperties.js'
import { createProperty, updateProperty, deleteProperty } from '../http/catalogAPI.js'

const defaultValue = {name: '', price: '', brand: '', mehanizm: '', gender: '', shape: '', 
    material: '', glass: '', strap: '', power: '', water: '', collection: ''
}
const defaultValid = {name: null, price: null, brand: null, mehanizm: null, gender: null, 
    shape: null, material: null, glass: null, strap: null, power: null, water: null, collection: null
}

const isValid = (value) => {
    const result = {}
    const pattern = /^[1-9][0-9]*$/
    for (let key in value) {
        if (key === 'name') result.name = value.name.trim() !== ''
        if (key === 'price') result.price = pattern.test(value.price.trim())
        if (key === 'brand') result.brand = pattern.test(value.brand)
        if (key === 'mehanizm') result.mehanizm = pattern.test(value.mehanizm)
        if (key === 'gender') result.gender = pattern.test(value.gender)
        if (key === 'shape') result.shape = pattern.test(value.shape)
        if (key === 'material') result.material = pattern.test(value.material)
        if (key === 'glass') result.glass = pattern.test(value.glass)
        if (key === 'strap') result.strap = pattern.test(value.strap)
        if (key === 'power') result.power = pattern.test(value.power)
        if (key === 'water') result.water = pattern.test(value.water)
        if (key === 'collection') result.collection = pattern.test(value.collection)
    }
    return result
}

const updateProperties = async (properties, productId) => {
    for (const prop of properties) {
        const empty = prop.name.trim() === '' || prop.value.trim() === ''
        if (empty && prop.id) {
            try {
                await deleteProperty(productId, prop)
            } catch(error) {
                alert(error.response.data.message)
            }
            continue
        }
        if (prop.append && !empty) {
            try {
                await createProperty(productId, prop)
            } catch(error) {
                alert(error.response.data.message)
            }
            continue
        }
        if (prop.change && !prop.remove) {
            try {
                await updateProperty(productId, prop.id, prop)
            } catch(error) {
                alert(error.response.data.message)
            }
            continue
        }
        if (prop.remove) {
            try {
                await deleteProperty(productId, prop.id)
            } catch(error) {
                alert(error.response.data.message)
            }
            continue
        }
    }
}

const UpdateProduct = (props) => {
    const { id, show, setShow, setChange } = props

    const [value, setValue] = useState(defaultValue)
    const [valid, setValid] = useState(defaultValid)
    const [brands, setBrands] = useState(null)
    const [mehanizms, setMehanizms] = useState(null)
    const [genders, setGenders] = useState(null)
    const [shapes, setShapes] = useState(null)
    const [materials, setMaterials] = useState(null)
    const [glasses, setGlasses] = useState(null)
    const [straps, setStraps] = useState(null)
    const [powers, setPowers] = useState(null)
    const [waters, setWaters] = useState(null)
    const [collections, setCollections] = useState(null)
    const [image, setImage] = useState(null)
    const [properties, setProperties] = useState([])

    useEffect(() => {
        if(id) {
            fetchOneProduct(id)
                .then(
                    data => {
                        const prod = {
                            name: data.name,
                            price: data.price.toString(),
                            category: data.categoryId.toString(),
                            brand: data.brandId.toString(),
                            mehanizm: data.mehanizmId.toString(),
                            gender: data.genderId.toString(),
                            shape: data.shapeId.toString(),
                            material: data.materialId.toString(),
                            glass: data.glassId.toString(),
                            strap: data.strapId.toString(),
                            power: data.powerId.toString(),
                            water: data.waterId.toString(),
                            collection: data.collectionId.toString()
                        }
                        setValue(prod)
                        setValid(isValid(prod))
                        setProperties(data.props.map(item => {
                            return {...item, unique: uuid(), append: false, remove: false, change: false}
                        }))
                    }
                )
                .catch(
                    error => alert(error.response.data.message)
                )
            fetchBrands()
                .then(
                    data => setBrands(data)
                )
            fetchMehanizms()
                .then(
                    data => setMehanizms(data)
                )
            fetchGenders()
                .then(
                    data => setGenders(data)
                )
            fetchShapes()
                .then(
                    data => setShapes(data)
                )
            fetchMaterials()
                .then(
                    data => setMaterials(data)
                )
            fetchGlasses()
                .then(
                    data => setGlasses(data)
                )
            fetchStraps()
                .then(
                    data => setStraps(data)
                )
            fetchPowers()
                .then(
                    data => setPowers(data)
                )
            fetchWaters()
                .then(
                    data => setWaters(data)
                )
            fetchCollections()
                .then(
                    data => setCollections(data)
                )
        }
    }, [id])

    const handleInputChange = (event) => {
        const data = {...value, [event.target.name]: event.target.value}
        setValue(data)
        setValid(isValid(data))
    }

    const handleImageChange = (event) => {
        setImage(event.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const correct = isValid(value)
        setValid(correct)
        if (correct.name && correct.price && correct.brand && correct.mehanizm && correct.gender && correct.shape && 
                correct.material && correct.glass && correct.strap && correct.power && correct.water && correct.collection
            ) {
            const data = new FormData()
            data.append('name', value.name.trim())
            data.append('price', value.price.trim())
            data.append('brandId', value.brand)
            data.append('mehanizmId', value.mehanizm)
            data.append('genderId', value.gender)
            data.append('shapeId', value.shape)
            data.append('materialId', value.material)
            data.append('glassId', value.glass)
            data.append('strapId', value.strap)
            data.append('powerId', value.power)
            data.append('waterId', value.water)
            data.append('collectionId', value.collection)
            if (image) data.append('image', image, image.name)
            if (properties.length) {
                await updateProperties(properties, id)
            }

            updateProduct(id, data)
                .then(
                    data => {
                        event.target.image.value = ''
                        const prod = {
                            name: data.name,
                            price: data.price.toString(),
                            brand: data.brandId.toString(),
                            mehanizm: data.mehanizmId.toString(),
                            gender: data.genderId.toString(),
                            shape: data.shapeId.toString(),
                            material: data.materialId.toString(),
                            glass: data.glassId.toString(),
                            strap: data.strapId.toString(),
                            power: data.powerId.toString(),
                            water: data.waterId.toString(),
                            collection: data.collectionId.toString()
                        }
                        setValue(prod)
                        setValid(isValid(prod))
                        setProperties(data.props.map(item => {
                            return {...item, unique: uuid(), append: false, remove: false, change: false}
                        }))
                        setShow(false)
                        setChange(state => !state)
                    }
                )
                .catch(
                    error => alert(error.response.data.message)
                )
        }
    }

    return (
        <Modal show={show} onHide={() => setShow(false)} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Редактирование товара</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form noValidate onSubmit={handleSubmit}>
                    <Form.Control
                        name="name"
                        value={value.name}
                        onChange={e => handleInputChange(e)}
                        isValid={valid.name === true}
                        isInvalid={valid.name === false}
                        placeholder="Название товара..."
                        className="mb-3"
                    />
                    <Row className="mb-3">
                        <Col>
                            <Form.Select
                                name="brand"
                                value={value.brand}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.brand === true}
                                isInvalid={valid.brand === false}
                            >
                                <option value="">Бренд</option>
                                {brands && brands.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select
                                name="mehanizm"
                                value={value.mehanizm}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.mehanizm === true}
                                isInvalid={valid.mehanizm === false}
                            >
                                <option value="">Тип механизма</option>
                                {mehanizms && mehanizms.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select
                                name="gender"
                                value={value.gender}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.gender === true}
                                isInvalid={valid.gender === false}
                            >
                                <option value="">Пол</option>
                                {genders && genders.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Form.Select
                                name="shape"
                                value={value.shape}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.shape === true}
                                isInvalid={valid.shape === false}
                            >
                                <option value="">Форма корпуса</option>
                                {shapes && shapes.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select
                                name="material"
                                value={value.material}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.material === true}
                                isInvalid={valid.material === false}
                            >
                                <option value="">Материал корпуса</option>
                                {materials && materials.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select
                                name="glass"
                                value={value.glass}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.glass === true}
                                isInvalid={valid.glass === false}
                            >
                                <option value="">Стекло</option>
                                {glasses && glasses.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Form.Select
                                name="strap"
                                value={value.strap}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.strap === true}
                                isInvalid={valid.strap === false}
                            >
                                <option value="">Материал браслета/ремешка</option>
                                {straps && straps.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select
                                name="power"
                                value={value.power}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.power === true}
                                isInvalid={valid.power === false}
                            >
                                <option value="">Запаса хода</option>
                                {powers && powers.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select
                                name="water"
                                value={value.water}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.water === true}
                                isInvalid={valid.water === false}
                            >
                                <option value="">Водонепроницаемость</option>
                                {waters && waters.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col>
                            <Form.Select
                                name="collection"
                                value={value.collection}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.collection === true}
                                isInvalid={valid.collection === false}
                            >
                                <option value="">Коллекция</option>
                                {collections && collections.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Form.Control
                                name="price"
                                value={value.price}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.price === true}
                                isInvalid={valid.price === false}
                                placeholder="Цена товара..."
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                name="image"
                                type="file"
                                onChange={e => handleImageChange(e)}
                                placeholder="Фото товара..."
                            />
                        </Col>
                    </Row>
                    <UpdateProperties properties={properties} setProperties={setProperties} />
                    <Row>
                        <Col>
                            <Button type="submit">Сохранить</Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default UpdateProduct