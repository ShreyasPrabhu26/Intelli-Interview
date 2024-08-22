import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className='mx-5 md:mx-20 lg:mx-36'>
                {children}
            </div>
        </>
    )
}

export default DashboardLayout