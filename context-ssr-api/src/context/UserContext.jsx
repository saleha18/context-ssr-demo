import { createContext, useContext, useState } from "react";

const UserContext = createContext(null); //Context

//Provider
export function UserProvider({ initialUser, children }) {
    const [user] = useState(initialUser);

    return(
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider> 
    );
}

//Consumer logic -- Custom React Hooks
export function useUser() {
    return useContext(UserContext);
}