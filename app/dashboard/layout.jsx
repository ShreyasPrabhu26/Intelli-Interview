import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const DashboardLayout = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export default DashboardLayout