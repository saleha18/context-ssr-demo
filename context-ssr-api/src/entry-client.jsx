import { hydrateRoot } from "react-dom/client";
import { UserProvider } from "./context/UserContext";
import App from './App';
import './index.css';

hydrateRoot(
    document.getElementById("root"),
    <UserProvider initialUser={window.__INITIAL_DATA__}>
        <App />
    </UserProvider>
);