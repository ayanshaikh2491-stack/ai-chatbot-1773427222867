import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    role: string;
}

function Header() {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    useEffect(() => {
        axios.get('/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleSelectUser = (user: User) => {
        setSelectedUser(user);
    };

    return (
        <div className="container mt-5">
            <h1>AI Chatbot</h1>
            <h2>Users:</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <button onClick={() => handleSelectUser(user)}>
                            {user.name} ({user.role})
                        </button>
                    </li>
                ))}
            </ul>
            {selectedUser && (
                <div>
                    <h2>{selectedUser.name} ({selectedUser.role})</h2>
                    <p>Chatbot will assist with {selectedUser.role} related issues.</p>
                </div>
            )}
        </div>
    );
}

export default Header;