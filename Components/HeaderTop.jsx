import Link from 'next/link';
import React from 'react'

const HeaderTop = () => {
    return (

        <div className="px-10 justify-center flex pt-5">
            <div className="header_top"
            >
                <p className="text-white">
                    Muhammad Nafees
                </p>

                <ul className="max-md:hidden flex items-center space-x-4">
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

                <div className="md:hidden">
                    <button>Nav</button>
                </div>

            </div>
        </div>
    )
}

export default HeaderTop;
