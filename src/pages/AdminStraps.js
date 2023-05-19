import { useState, useEffect } from 'react'
import { fetchStraps, deleteStrap } from '../http/catalogAPI.js'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
import EditStrap from '../components/EditStrap.js'
import { Link } from 'react-router-dom'

const AdminStraps = () => {
    const [straps, setStraps] = useState(null)
    const [fetching, setFetching] = useState(true)
    const [show, setShow] = useState(false)
    const [change, setChange] = useState(false)
    const [strapId, setStrapId] = useState(0)

    const handleCreateClick = () => {
        setStrapId(0)
        setShow(true)
    }

    const handleUpdateClick = (id) => {
        setStrapId(id)
        setShow(true)
    }

    const handleDeleteClick = (id) => {
        deleteStrap(id)
            .then(
                data => {
                    setChange(!change)
                    alert(`Материал корпуса/ремешка «${data.name}» удален`)
                }
            )
            .catch(
                error => alert(error.response.data.message)
            )
    }

    useEffect(() => {
        fetchStraps()
            .then(
                data => setStraps(data)
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
            <h1>Материал браслета/ремешка</h1>
            <Button onClick={() => handleCreateClick()}>Создать материал корпуса/ремешка</Button>
            <EditStrap id={strapId} show={show} setShow={setShow} setChange={setChange} />
            {straps.length > 0 ? (
                <Table bordered hover size="sm" className="mt-3">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {straps.map(item => 
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
                <p>Список материалов браслета/ремешка пустой</p>
            )}
            <Button><Link style={{color: 'white', textDecoration: 'none'}} to="/admin">Назад</Link></Button>
        </Container>
    )
}

export default AdminStraps