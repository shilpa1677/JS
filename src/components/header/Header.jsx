import React from 'react'

const Header = () => {
    return (
        <div className="grid grid=cols-2 gap-4 max-w-xs">

            <img src="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg" alt="" />

            <div className="flex gap-10">
                <p>Home</p>
                <p>About</p>
                <p>Blog</p>
                <p>Contact</p>
                <button className="bg=emeald-500 px-5 py-2 text-white rounded-full">
                    
                </button>

            </div>
        </div>
    )
}

export default Header
