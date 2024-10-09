import { createContext, useRef, useState } from "react"

export const GlobalContext = createContext(null)

export default function GlobalState({ children }) {
  const [selecInput, setSelecInput] = useState('HomePageUser')
  return (
    <GlobalContext.Provider
      value={{
        selecInput,
        setSelecInput
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}