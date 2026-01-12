import { useUser } from "../context/UserContext"
export default function UserDetails({ id }) {
    const { user } = useUser();
    const selectedUser = user[0] ? user[0].find(u => u.id === id) : null;
    
    return (
        <div>
            <h1>User Details</h1>
            {selectedUser ? (
                <div>
                    <p><strong>Name:</strong> {selectedUser.name}</p>
                    <p><strong>Email:</strong> {selectedUser.email}</p>
                    <p><strong>Username:</strong> {selectedUser.username}</p>
                   
                </div>
            ) : (
                <p>User not found.</p>
            )}
        </div>
    )
}