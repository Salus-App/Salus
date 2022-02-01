import { Outlet } from 'react-router-dom'
import React from 'react'

import Navbar from './navbar.jsx'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout

