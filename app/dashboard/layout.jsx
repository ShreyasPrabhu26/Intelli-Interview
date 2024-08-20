import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import Header from './_componenets/Header'

const DashboardLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='mx-5 md:mx-20 lg:mx-36'>
                {children}
            </div>
        </>
    )
}

export default DashboardLayout