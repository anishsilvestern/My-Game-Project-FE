import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Componets/Home/Home'
import Login from './Componets/login/Login'
import Register from './Componets/login/Register'
import ForgotPassword from './Componets/login/ForgotPassword'
import EmailCode from './Componets/login/EmailCode'
import NewPassword from './Componets/login/NewPassword'
import Sos from './Componets/SOS Game/Sos'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:"/login",
    element: <Login />,
  },
  {
    path:"/register",
    element: <Register />,
  },
  {
    path:"/forgotPassword",
    element: <ForgotPassword />
  },
  {
    path: "/emailCode",
    element: <EmailCode />
  },
  {
    path: "/newPassword",
    element: <NewPassword />
  
  },
  {
    path: "/sos",
    element: <Sos />
  }
])


const App = () => {

  return (
    <>
      <RouterProvider router={router}  />
    </>
  )
}

export default App