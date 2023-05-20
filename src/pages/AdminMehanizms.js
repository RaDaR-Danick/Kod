import { useState, useEffect } from 'react'
import { fetchMehanizms, deleteMehanizm } from '../http/adminAPI.js'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
import EditMehanizm from '../components/EditMehanizm.js'
import { Link } from 'react-router-dom'

const AdminMehanizms = () => {
    const [mehanizms, setMehanizms] = useState(null)
    const [fetching, setFetching] = useState(true)
    const [show, setShow] = useState(false)
    const [change, setChange] = useState(false)
    const [mehanizmId, setMehanizmId] = useState(0)

    const handleCreateClick = () => {
        setMehanizmId(0)
        setShow(true)
    }

    const handleUpdateClick = (id) => {
        setMehanizmId(id)
        setShow(true)
    }

    const handleDeleteClick = (id) => {
        deleteMehanizm(id)
            .then(
                data => {
                    setChange(!change)
                    alert(`Тип механизма «${data.name}» удален`)
                }
            )
            .catch(
                error => alert(error.response.data.message)
            )
    }

    useEffect(() => {
        fetchMehanizms()
            .then(
                data => setMehanizms(data)
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
            <h1>Типы механизмов</h1>
            <Button onClick={() => handleCreateClick()}>Создать тип механизма</Button>
            <EditMehanizm id={mehanizmId} show={show} setShow={setShow} setChange={setChange} />
            {mehanizms.length > 0 ? (
                <Table bordered hover size="sm" className="mt-3">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {mehanizms.map(item => 
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
                <p>Список типов механизмов пустой</p>
            )}
            <Button><Link style={{color: 'white', textDecoration: 'none'}} to="/admin">Назад</Link></Button>
        </Container>
    )
}

export default AdminMehanizms