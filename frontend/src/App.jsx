// import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { useContext } from "react";
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignup from "./pages/CaptainSignup"
import { UserDataContext } from './context/UserDataContext.jsx'



const App = () => {

  const [user] = useContext(UserDataContext)
  // console.log(ans)

 

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignup/>}/>
        <Route path="/captain-login" element={<CaptainLogin/>}/>
        <Route path="/captain-signup" element={<CaptainSignup/>}/>
      </Routes>
      <div>User: {user.fullName.firstName} {user.fullName.lastName}</div>
    </div>
  )
}

export default App