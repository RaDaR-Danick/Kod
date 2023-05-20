import { useState, useEffect } from 'react'
import { fetchShapes, deleteShape } from '../http/adminAPI.js'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
import EditShape from '../components/EditShape.js'
import { Link } from 'react-router-dom'

const AdminShapes = () => {
    const [shapes, setShapes] = useState(null)
    const [fetching, setFetching] = useState(true)
    const [show, setShow] = useState(false)
    const [change, setChange] = useState(false)
    const [shapeId, setShapeId] = useState(0)

    const handleCreateClick = () => {
        setShapeId(0)
        setShow(true)
    }

    const handleUpdateClick = (id) => {
        setShapeId(id)
        setShow(true)
    }

    const handleDeleteClick = (id) => {
        deleteShape(id)
            .then(
                data => {
                    setChange(!change)
                    alert(`Форма корпуса «${data.name}» удалена`)
                }
            )
            .catch(
                error => alert(error.response.data.message)
            )
    }

    useEffect(() => {
        fetchShapes()
            .then(
                data => setShapes(data)
            )
            .finally(
                () => setFetching(false)
            )
    }, [change])

    if (fetching) {
        return <Spinner animation="border" />
    }

    return (
        <Container>
            <h1>Бренды</h1>
            <Button onClick={() => handleCreateClick()}>Создать форму корпуса</Button>
            <EditShape id={shapeId} show={show} setShow={setShow} setChange={setChange} />
            {shapes.length > 0 ? (
                <Table bordered hover size="sm" className="mt-3">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {shapes.map(item => 
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <Button variant="success" size="sm" onClick={() => handleUpdateClick(item.id)}>
                                    Редактировать
                                </Button>
                            </td>
                            <td>
                                <Button variant="danger" size="sm" onClick={() => handleDeleteClick(item.id)}>
                                    Удалить
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
                </Table>
            ) : (
                <p>Список форм корпусов пустой</p>
            )}
            <Button><Link style={{color: 'white', textDecoration: 'none'}} to="/admin">Назад</Link></Button>
        </Container>
    )
}

export default AdminShapes