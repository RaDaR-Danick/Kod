import { useState, useEffect } from 'react'
import { fetchGenders, deleteGender } from '../http/catalogAPI.js'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
import EditGender from '../components/EditGender.js'
import { Link } from 'react-router-dom'

const AdminGenders = () => {
    const [genders, setGenders] = useState(null)
    const [fetching, setFetching] = useState(true)
    const [show, setShow] = useState(false)
    const [change, setChange] = useState(false)
    const [genderId, setGenderId] = useState(0)

    const handleCreateClick = () => {
        setGenderId(0)
        setShow(true)
    }

    const handleUpdateClick = (id) => {
        setGenderId(id)
        setShow(true)
    }

    const handleDeleteClick = (id) => {
        deleteGender(id)
            .then(
                data => {
                    setChange(!change)
                    alert(`Пол «${data.name}» удален`)
                }
            )
            .catch(
                error => alert(error.response.data.message)
            )
    }

    useEffect(() => {
        fetchGenders()
            .then(
                data => setGenders(data)
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
            <h1>Пол</h1>
            <Button onClick={() => handleCreateClick()}>Создать пол</Button>
            <EditGender id={genderId} show={show} setShow={setShow} setChange={setChange} />
            {genders.length > 0 ? (
                <Table bordered hover size="sm" className="mt-3">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {genders.map(item => 
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
                <p>Список полов пустой</p>
            )}
            <Button><Link style={{color: 'white', textDecoration: 'none'}} to="/admin">Назад</Link></Button>
        </Container>
    )
}

export default AdminGenders