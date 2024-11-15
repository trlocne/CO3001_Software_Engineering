import { createContext, useRef, useState } from "react"

export const GlobalContext = createContext(null)

export default function GlobalState({ children }) {
  const [selecInput, setSelecInput] = useState('HomePageUser')
  const [noti, setNoti] = useState([
    {
      time: "10:00 AM - 22/11/2022",
      avatar: "https://example.com/avatar1.png",
      title: "Notification 1"
    },
    {
      time: "11:00 AM - 21/12/2021",
      avatar: "https://example.com/avatar2.png",
      title: "Notification 2"
    },
    {
      time: "12:00 PM - 20/10/2020",
      avatar: "https://example.com/avatar3.png",
      title: "Notification 3"
    }
  ]);
  const [bill, setBill] = useState([
    {
      time: "10:00 AM - 22/11/2022",
      title: "#12093"
    },
    {
      time: "11:00 AM - 21/12/2021",
      title: "#01934"
    },
    {
      time: "12:00 PM - 20/10/2020",
      title: "#245532"
    }
  ]);
  return (
    <GlobalContext.Provider
      value={{
        selecInput,
        setSelecInput,
        noti, 
        setNoti,
        bill, 
        setBill
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}