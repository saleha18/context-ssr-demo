import { useUser } from "../context/UserContext";
import Grandchild from "./Grandchild";

export default function Child() {
    const {user} = useUser();
    return (
    <>
        <h3>Role: {user.role}</h3>
        <Grandchild />
    </>
    );
}