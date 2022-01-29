import { Link } from 'react-router-dom';
import React from 'react';


const Navbar = () => {
    return (
        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/podcasts">Podcasts</Link>
            <Link to = "/songs">Songs</Link>
        </nav>
    )
}

export default Navbar