// import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { useContext } from "react";
import Start from "./pages/Start"
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignup from "./pages/CaptainSignup"
import CaptainHome from './pages/CaptainHome.jsx';
import CaptainLogout from './pages/CaptainLogout'
import Home from "./pages/Home.jsx"
import { UserDataContext } from './context/UserDataContext.jsx'
import UserProtectedWrapper from './pages/UserProtectedWrapper.jsx';
import UserLogout from './pages/UserLogout.jsx';
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper.jsx';


const App = () => {

  const {user, setUser} = useContext(UserDataContext)
  // console.log(ans)

 

  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignup/>}/>
        <Route path="/captain-login" element={<CaptainLogin/>}/>
        <Route path="/captain-signup" element={<CaptainSignup/>}/>
        <Route path="/home" element={
          <UserProtectedWrapper>
                  <Home/>
          </UserProtectedWrapper>}/>
          <Route path="/users/logout" element={
            <UserProtectedWrapper>
                    <UserLogout />
            </UserProtectedWrapper>}/>

          <Route path='/captain-home' element={
                <CaptainProtectedWrapper>
                    <CaptainHome />
                </CaptainProtectedWrapper>
          } />

          <Route path='/captains/logout' element={
                <CaptainProtectedWrapper>
                      <CaptainLogout />
                </CaptainProtectedWrapper>
          } />

          
      </Routes>
    </div>
  )
}

export default App