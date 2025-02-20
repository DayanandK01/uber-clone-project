import { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainDataContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'  // ✅ Import PropTypes

const CaptainProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
            return
        }

        const fetchCaptainProfile = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (response.status === 200) {
                    setCaptain(response.data.captain)
                    setIsLoading(false)
                }
            } catch (err) {
                localStorage.removeItem('token')
                navigate('/captain-login')
            }
        }

        fetchCaptainProfile()
    }, [token, navigate, setCaptain])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <>{children}</>
}

// ✅ Define PropTypes
CaptainProtectedWrapper.propTypes = {
    children: PropTypes.node.isRequired,  // Ensures `children` is passed and is a valid React node
}

export default CaptainProtectedWrapper
