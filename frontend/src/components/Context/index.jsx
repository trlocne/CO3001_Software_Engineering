import { createContext, useRef, useState } from "react"

export const GlobalContext = createContext(null)

export default function GlobalState({ children }) {
    const [role, setRole] = useState("user");
    const [test,setTest] = useState("");
    return (
    <GlobalContext.Provider
        value={{
        test,
        setTest,
        role,
        setRole,
        }}
    >
        {children}
    </GlobalContext.Provider>
    )
}