import { Route, Routes } from 'react-router-dom';
import './App.css'
import UserList from './components/UserList';
import {useUser} from "./context/UserContext";
import UserDetails from './components/UserDetails';
function App() {
    const {user} = useUser();
    return (
   < UserList/>
    );
}

export default App
