import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { createProduct, fetchBrands, fetchMehanizms, fetchGenders, fetchShapes, fetchMaterials, fetchGlasses, fetchStraps, fetchPowers, fetchWaters } from '../http/catalogAPI.js'
import { useState, useEffect } from 'react'
import CreateProperties from './CreateProperties.js'

const defaultValue = {name: '', price: '', brand: '', mehanizm: '', gender: '', shape: '', material: '', glass: '', strap: '', power: '', water: ''}
const defaultValid = {name: null, price: null, brand: null, mehanizm: null, gender: null, shape: null, material: null, glass: null, strap: null, power: null, water: null}

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
    }
    return result
}

const CreateProduct = (props) => {
    const { show, setShow, setChange } = props

    const [value, setValue] = useState(defaultValue)
    const [valid, setValid] = useState(defaultValid)
    const [image, setImage] = useState(null)
    const [properties, setProperties] = useState([])
    const [brands, setBrands] = useState(null)
    const [mehanizms, setMehanizms] = useState(null)
    const [genders, setGenders] = useState(null)
    const [shapes, setShapes] = useState(null)
    const [materials, setMaterials] = useState(null)
    const [glasses, setGlasses] = useState(null)
    const [straps, setStraps] = useState(null)
    const [powers, setPowers] = useState(null)
    const [waters, setWaters] = useState(null)
    useEffect(() => {
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
    }, [])

    const handleInputChange = (event) => {
        const data = {...value, [event.target.name]: event.target.value}
        setValue(data)
        setValid(isValid(data))
    }

    const handleImageChange = (event) => {
        setImage(event.target.files[0])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const correct = isValid(value)
        setValid(correct)
        if (correct.name && correct.price && correct.brand && correct.mehanizm && correct.gender && correct.shape && correct.material && correct.glass && correct.strap && correct.power && correct.water) {

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
            if (image) data.append('image', image, image.name)
            if (properties.length) {
                const props = properties.filter(
                    prop => prop.name.trim() !== '' && prop.value.trim() !== ''
                )
                if (props.length) {
                    data.append('props', JSON.stringify(props))
                }
            }

            createProduct(data)
                .then(
                    data => {
                        event.target.image.value = ''
                        setValue(defaultValue)
                        setValid(defaultValid)
                        setProperties([])
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
                <Modal.Title>Новый товар</Modal.Title>
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
                                value={value.image}
                                onChange={e => handleInputChange(e)}
                                isValid={valid.image === true}
                                isInvalid={valid.imege === false}
                                placeholder="Фото товара..."
                            />
                        </Col>
                    </Row>
                    <CreateProperties properties={properties} setProperties={setProperties} />
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

export default CreateProduct