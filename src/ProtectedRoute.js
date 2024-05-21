import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const isAuthenticated = true
    const location = useLocation()  
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{from: location}} />
    }
    return children
}

export default ProtectedRoute