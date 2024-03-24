import React from 'react'

export const Header = () => {
    return (
        <header>
            <div className='flex justify-between items-center p-5 bg-black text-white'>
                <h1 className='text-2xl'>Creader</h1>
                <nav>
                    <ul className='flex space-x-5'>
                        <li>Home</li>
                        <li>Blog</li>
                        <li>About</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
