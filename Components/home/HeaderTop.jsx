"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const HeaderTop = () => {

    const [nav, setNav] = useState(false)

    const navbarHandle = () => {
        setNav(!nav)
    }

    return (

        <div className="px-10 bg-gradient-to-r from-purple-500 to-cyan-500 justify-center flex pt-5">
            <div className="header_top">
                <Link href="/">
                    <h3 className="text-white font-bold">Muhammad Nafees</h3>
                </Link>

                <ul className="hidden md:flex items-center space-x-4">
                    <li className="text-white rounded-md px-4 py-2">
                        <Link href="/">About</Link>
                    </li>
                    <li className="text-white rounded-md px-4 py-2">
                        <Link href="/exprience">Experience</Link>
                    </li>
                    <li className="text-white  rounded-md px-4 py-2">
                        <Link href="/project">projects</Link>
                    </li>
                    <li className="text-white  rounded-md px-4 py-2">
                        <Link href="/contacts">Contacts</Link>
                    </li>
                </ul>

                <div onClick={navbarHandle} className='md:hidden z-10'>
                    {
                        nav ?
                            <AiOutlineClose color='white' />
                            :
                            <AiOutlineMenu color='white' />
                    }

                </div>

                {/* Mobile Menu */}

                <ul className={
                    nav ?
                        "md:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col ease-in duration-300 bg-black h-screen w-full justify-center items-center"
                        :
                        "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col ease-in duration-300 bg-black h-screen w-full justify-center items-center"
                }>
                    <li className="text-white  px-4 py-2">
                        <Link href="/">About</Link>
                    </li>
                    <li className="text-white  px-4 py-2">
                        <Link href="/exprience">Experience</Link>
                    </li>
                    <li className="text-white px-4 py-2">
                        <Link href="/project">projects</Link>
                    </li>
                    <li className="text-white px-4 py-2">
                        <Link href="/contacts">Contacts</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default HeaderTop;
