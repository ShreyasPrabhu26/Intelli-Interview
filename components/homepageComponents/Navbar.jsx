"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { UserButton } from '@clerk/nextjs'
import React, { useEffect } from 'react'

export const Navbar = () => {

    return (
        <div className="w-full">
            <nav className="container relative flex flex-wrap items-center justify-evenly px-8 mx-auto lg:justify-evenly xl:px-0 py-3">
                {/* Logo  */}
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                                <Link href="/">
                                    <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                                        <span>
                                            <img src={"/logo.svg"} className='rounded-xl' width={75} height={75} alt="Logo" />
                                        </span>
                                        <span>Intelli Interview</span>
                                    </span>
                                </Link>

                                <Disclosure.Button
                                    aria-label="Toggle Menu"
                                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        {open && (
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                            />
                                        )}
                                        {!open && (
                                            <path
                                                fillRule="evenodd"
                                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                            />
                                        )}
                                    </svg>
                                </Disclosure.Button>

                                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                                    <>
                                        <UserButton />

                                        <Link href={'/dashboard'} className={`nav_element`}>Dashboard</Link>

                                        <Link href={'/dashboard/upgrade'} className={`nav_element`}>Upgrade</Link>

                                        <div className="flex gap-3">
                                            <span>Switch Theme: </span>
                                            <ThemeChanger />
                                        </div>
                                    </>
                                </Disclosure.Panel>
                            </div>
                        </>
                    )}
                </Disclosure>

                {/* menu  */}
                <div className="hidden text-center lg:flex lg:items-center">
                    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                        <>
                            <Link href={'/dashboard'} className={`nav_element_on_md`}>Dashboard</Link>

                            <Link href={'/dashboard/upgrade'} className={`nav_element_on_md`}>Upgrade</Link>

                        </>
                    </ul>
                </div>
                <div className="hidden text-center lg:flex lg:items-center gap-5 items-center justify-center">
                    <ThemeChanger />
                    <UserButton />
                </div>
            </nav>
        </div >
    );
}

