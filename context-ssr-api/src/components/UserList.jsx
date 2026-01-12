import { useState } from "react";
import { useUser } from "../context/UserContext";
import UserDetails from "./UserDetails";

export default function UserList() {
    const { user } = useUser();
    const [selectedUserId, setSelectedUserId] = useState(null);

    const handlerUserDetails = (id) => {
        setSelectedUserId(id);
    }

    if (selectedUserId) {
        return <UserDetails id={selectedUserId} />;
    }
    return (
          <><h1>Users</h1><table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>

            <thead>
                <tr style={{ borderBottom: '2px solid #ddd' }}>
                    <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
                    <th style={{ padding: '10px', textAlign: 'left' }}>Action</th>
                </tr>
            </thead>
            <tbody>
                {user[0].map((u, i) => (
                    <tr key={u.id ?? `user-${i}`} style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ padding: '10px' }}>{u.name}</td>
                        <td style={{ padding: '10px' }}>
                            <button onClick={() => handlerUserDetails(u.id)}>Details</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table></>
    );
}