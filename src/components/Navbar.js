import './Navbar.css'

import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            {/* <Link to="">Home</Link> {/*SEMELHANTE A TAG "a href" */}
            {/*<Link to="/about">Sobre</Link> */}

            <NavLink to="/" className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")}> Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
     );
}
 
export default Navbar;