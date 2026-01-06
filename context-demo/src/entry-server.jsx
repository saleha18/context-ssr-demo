import { renderToString } from "react-dom/server";
import { UserProvider } from "./context/UserContext";
import App from './App';

export async function render() {
    const response = await fetch("http://localhost:5173/api/user");
    const user = await response.json();

    const html = renderToString(
        <UserProvider initialUser={user}>
            <App />
        </UserProvider>
    );

    return {
        appHtml: html,
        initialData: user
    };
}