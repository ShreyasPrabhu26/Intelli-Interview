import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import Header from './_componenets/Header'

const DashboardLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div>{children}</div>
        </>
    )
}

export default DashboardLayout