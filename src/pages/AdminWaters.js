import { useState, useEffect } from 'react'
import { fetchWaters, deleteWater } from '../http/adminAPI.js'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
import EditWater from '../components/EditWater.js'
import { Link } from 'react-router-dom'

const AdminWaters = () => {
    const [waters, setWaters] = useState(null)
    const [fetching, setFetching] = useState(true)
    const [show, setShow] = useState(false)
    const [change, setChange] = useState(false)
    const [waterId, setWaterId] = useState(0)

    const handleCreateClick = () => {
        setWaterId(0)
        setShow(true)
    }

    const handleUpdateClick = (id) => {
        setWaterId(id)
        setShow(true)
    }

    const handleDeleteClick = (id) => {
        deleteWater(id)
            .then(
                data => {
                    setChange(!change)
                    alert(`Водонепроницаемость «${data.name}» удалена`)
                }
            )
            .catch(
                error => alert(error.response.data.message)
            )
    }

    useEffect(() => {
        fetchWaters()
            .then(
                data => setWaters(data)
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
            <Button onClick={() => handleCreateClick()}>Создать водонепроницаемость</Button>
            <EditWater id={waterId} show={show} setShow={setShow} setChange={setChange} />
            {waters.length > 0 ? (
                <Table bordered hover size="sm" className="mt-3">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {waters.map(item => 
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
                <p>Список водонепроницаемости пустой</p>
            )}
            <Button><Link style={{color: 'white', textDecoration: 'none'}} to="/admin">Назад</Link></Button>
        </Container>
    )
}

export default AdminWaters