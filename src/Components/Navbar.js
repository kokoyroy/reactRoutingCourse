import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    // console.log('ta props apo to navbar!');
    // console.log(props);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Poketimes!</Link>
                <ul className='right' >
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(Navbar);