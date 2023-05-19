import { useState, useEffect } from 'react'
import { fetchPowers, deletePower } from '../http/catalogAPI.js'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
import EditPower from '../components/EditPower.js'
import { Link } from 'react-router-dom'

const AdminPowers = () => {
    const [powers, setPowers] = useState(null)
    const [fetching, setFetching] = useState(true)
    const [show, setShow] = useState(false)
    const [change, setChange] = useState(false)
    const [powerId, setPowerId] = useState(0)

    const handleCreateClick = () => {
        setPowerId(0)
        setShow(true)
    }

    const handleUpdateClick = (id) => {
        setPowerId(id)
        setShow(true)
    }

    const handleDeleteClick = (id) => {
        deletePower(id)
            .then(
                data => {
                    setChange(!change)
                    alert(`Срок запаса хода «${data.name}» удален`)
                }
            )
            .catch(
                error => alert(error.response.data.message)
            )
    }

    useEffect(() => {
        fetchPowers()
            .then(
                data => setPowers(data)
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
            <Button onClick={() => handleCreateClick()}>Создать срок запаса хода</Button>
            <EditPower id={powerId} show={show} setShow={setShow} setChange={setChange} />
            {powers.length > 0 ? (
                <Table bordered hover size="sm" className="mt-3">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {powers.map(item => 
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
                <p>Список запаса хода пустой</p>
            )}
            <Button><Link style={{color: 'white', textDecoration: 'none'}} to="/admin">Назад</Link></Button>
        </Container>
    )
}

export default AdminPowers