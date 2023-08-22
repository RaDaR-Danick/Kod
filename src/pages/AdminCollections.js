import { useState, useEffect } from 'react'
import { fetchCollections, deleteCollection } from '../http/adminAPI.js'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
import EditCollection from '../components/EditCollection.js'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet"

const AdminCollections = () => {
    const [collections, setCollections] = useState(null)
    const [fetching, setFetching] = useState(true)
    const [show, setShow] = useState(false)
    const [change, setChange] = useState(false)
    const [collectionId, setCollectionId] = useState(0)

    const handleCreateClick = () => {
        setCollectionId(0)
        setShow(true)
    }

    const handleUpdateClick = (id) => {
        setCollectionId(id)
        setShow(true)
    }

    const handleDeleteClick = (id) => {
        deleteCollection(id)
            .then(
                data => {
                    setChange(!change)
                    alert(`Бренд «${data.name}» удален`)
                }
            )
            .catch(
                error => alert(error.response.data.message)
            )
    }

    useEffect(() => {
        fetchCollections()
            .then(
                data => setCollections(data)
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
            <Helmet>
                <title>Добавить коллекцию - Aksessuary.KZ</title>
                <meta name="description" content="Онлайн магазин часов"/>
            </Helmet>
            <h1>Коллекции</h1>
            <Button onClick={() => handleCreateClick()}>Создать коллекцию</Button>
            <EditCollection id={collectionId} show={show} setShow={setShow} setChange={setChange} />
            {collections.length > 0 ? (
                <Table bordered hover size="sm" className="mt-3">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {collections.map(item => 
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
                <p>Список коллекций пустой</p>
            )}
            <Button><Link style={{color: 'white', textDecoration: 'none'}} to="/admin">Назад</Link></Button>
        </Container>
    )
}

export default AdminCollections