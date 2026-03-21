import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-violet-900 px-9 py-2 text-white'>
            <div className="logo">
                <span className='font-bold text-xl'>iTask</span>
            </div>
            <ul className="flex gap-10">
                <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
            </ul>
        </nav>
    )
}

export default Navbar
