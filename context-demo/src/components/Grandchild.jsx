import { useUser } from "../context/UserContext"

export default function Grandchild() {
    const { user } = useUser();
    return <h3>User: {user.name}</h3>
}