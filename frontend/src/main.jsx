import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalState from './Context/index.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from './components/HomePage/index.jsx'
import { Signup } from './components/Signup/index.jsx'
import { Profile } from './components/Profile/index.jsx'
import { ConfigSPSO } from './components/ConfigSPSO/index.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/Homepage",
    element:<HomePage/>
  },
  {
    path:"/Signup",
    element:<Signup/>
  },
  {
    path:"/ConfigSPSO",
    element:<ConfigSPSO/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalState>
      <RouterProvider router={router}/>
    </GlobalState>
  </React.StrictMode>
)