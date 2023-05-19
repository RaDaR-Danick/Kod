import { useState, useEffect } from 'react'
import { fetchGlasses, deleteGlass } from '../http/catalogAPI.js'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
import EditGlass from '../components/EditGlass.js'
import { Link } from 'react-router-dom'

const AdminGlasses = () => {
    const [glasses, setGlasses] = useState(null)
    const [fetching, setFetching] = useState(true)
    const [show, setShow] = useState(false)
    const [change, setChange] = useState(false)
    const [glassId, setGlassId] = useState(0)

    const handleCreateClick = () => {
        setGlassId(0)
        setShow(true)
    }

    const handleUpdateClick = (id) => {
        setGlassId(id)
        setShow(true)
    }

    const handleDeleteClick = (id) => {
        deleteGlass(id)
            .then(
                data => {
                    setChange(!change)
                    alert(`Тип стекла «${data.name}» удален`)
                }
            )
            .catch(
                error => alert(error.response.data.message)
            )
    }

    useEffect(() => {
        fetchGlasses()
            .then(
                data => setGlasses(data)
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
            <h1>Стекла</h1>
            <Button onClick={() => handleCreateClick()}>Создать тип стекла</Button>
            <EditGlass id={glassId} show={show} setShow={setShow} setChange={setChange} />
            {glasses.length > 0 ? (
                <Table bordered hover size="sm" className="mt-3">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {glasses.map(item => 
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
                <p>Список стекол пустой</p>
            )}
            <Button><Link style={{color: 'white', textDecoration: 'none'}} to="/admin">Назад</Link></Button>
        </Container>
    )
}

export default AdminGlasses