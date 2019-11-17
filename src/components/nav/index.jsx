import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>{ 
    return(
        <header className="header">
            <div>
                <h1 className="breaking">Breaking</h1>
                <h1 className="bad">Bad</h1>
            </div>
            <nav className="nav">
                <Link to="/" className="links">Home</Link>
                <Link to="/quotes" className="links">Quotes</Link>
            </nav>
</header>
    )
}

export default Nav;