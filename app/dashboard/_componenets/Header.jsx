"use client"
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
    const path = usePathname();
    return (
        <div className='flex h-24 p-4 items-center justify-between bg-secondary shadow-sm'>
            <img src={"/logo.svg"} className='rounded-xl' width={75} height={75} alt="Logo" />
            <ul className='header_link_items hidden md:flex gap-6 '>
                <li className={`${path == '/dashboard' && 'text-primary font-bold'}`}>Dashboard</li>
                <li className={`${path == '/dashboard/questions' && 'text-primary font-bold'}`}>Questions</li>
                <li className={`${path == '/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</li>
                <li className={`${path == '/dashboard/howitworks' && 'text-primary font-bold'}`}>How it works?</li>
            </ul>
            <UserButton />
        </div >
    )
}

export default Header