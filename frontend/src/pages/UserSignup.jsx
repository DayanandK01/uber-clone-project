// import React from 'react'
import { useState} from "react"
import { Link } from "react-router-dom"

const UserSignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()

        setUserData({
            fullName:{
                firstName:firstName,
                lastName:lastName
            },
            email:email,
            password:password,
        });

        console.log(userData);

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')

    };

    // This runs whenever userData is updated
// useEffect(() => {
//     console.log(userData);
// }, [userData]);

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
        <div>
        <img className="w-16 mb-6" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="Uber logo" />

                <form onSubmit={(e) =>{
                    submitHandler(e)
                }} action="">
                    <h3 className="text-lg font-medium mb-2">What`s your name</h3>
                    <div className="flex gap-4 mb-5">
                        <input 
                        className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                        
                        required 
                        type="text" 
                        name="" id="" 
                        placeholder="first name"
                        value={firstName}
                        onChange = {(e) => {
                            setFirstName(e.target.value)
                        }}
                        />

                        <input 
                        className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base" 
                        type="text" 
                        name="" id="" 
                        placeholder="last name"
                        value={lastName}
                        onChange = {(e) => {
                            setLastName(e.target.value)
                        }}
                        />
                    </div>

        
                    <h3 className="text-lg font-medium mb-2">What is your email</h3>
                    <input 
                    className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                    
                    required 
                    type="email" 
                    name="" id="" 
                    placeholder="email@example.com"
                    value={email}
                        onChange = {(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <h3 className="text-lg font-medium mb-2">Enter password</h3>
                    <input 
                    className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                    
                    required 
                    type="password" 
                    placeholder="password" 
                    value={password}
                        onChange = {(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <button
                    className="bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
                        Sign Up
                    </button>

                </form>
            <p className="text-center">Already have an account?,<Link to="/login" className="text-blue-600">Log-in here</Link></p>
        </div>

        <div>
            <p className="text-[8px] leading-tight">This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply.</span></p>
        </div>
    </div>
  )
}

export default UserSignup