import useInput from "../hooks/useInput";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useEffect, useState, useCallback } from "react"

export default function EffectSection() {
    const input = useInput()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }, [])

    // async function fetchUsers() {
    //     setLoading(true)
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const users = await response.json()
    //     setUsers(users)
    //     setLoading(false)
    // }

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        <section>
            <h3>Effects</h3>

            <Button style={{marginBottom: '1rem'}} onClick={() => setModal(true)} >Открыть инфо</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio quisquam laboriosam magnam sed incidunt. Magni obcaecati, nostrum, tempore similique earum hic possimus est repellendus numquam ipsum nulla quibusdam ea!</p>
                <Button onClick={() => setModal(false)}>Close modal</Button>
            </Modal>

            {loading && <p>Loading...</p>}

            {!loading && (
            <>
                <input type="text" className="control" {...input} />
                
                <ul>
                {users.filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase())).map(user => <li key={user.id}>{user.name}</li>)}
                </ul>
            </>
            )}
        </section>
    )
}