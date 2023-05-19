import { useState, useEffect } from 'react'
import { fetchMaterials, deleteMaterial } from '../http/catalogAPI.js'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
import EditMaterial from '../components/EditMaterial.js'
import { Link } from 'react-router-dom'

const AdminMaterials = () => {
    const [materials, setMaterials] = useState(null)
    const [fetching, setFetching] = useState(true)
    const [show, setShow] = useState(false)
    const [change, setChange] = useState(false)
    const [materialId, setMaterialId] = useState(0)

    const handleCreateClick = () => {
        setMaterialId(0)
        setShow(true)
    }

    const handleUpdateClick = (id) => {
        setMaterialId(id)
        setShow(true)
    }

    const handleDeleteClick = (id) => {
        deleteMaterial(id)
            .then(
                data => {
                    setChange(!change)
                    alert(`Материал корпуса «${data.name}» удален`)
                }
            )
            .catch(
                error => alert(error.response.data.message)
            )
    }

    useEffect(() => {
        fetchMaterials()
            .then(
                data => setMaterials(data)
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
            <Button onClick={() => handleCreateClick()}>Создать материал корпуса</Button>
            <EditMaterial id={materialId} show={show} setShow={setShow} setChange={setChange} />
            {materials.length > 0 ? (
                <Table bordered hover size="sm" className="mt-3">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {materials.map(item => 
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
                <p>Список материалов корпуса пустой</p>
            )}
            <Button><Link style={{color: 'white', textDecoration: 'none'}} to="/admin">Назад</Link></Button>
        </Container>
    )
}

export default AdminMaterials