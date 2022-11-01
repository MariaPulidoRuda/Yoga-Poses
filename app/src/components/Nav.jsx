import { NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return <nav className="nav">
        <ul>
            <li>
                <NavLink to="">Home</NavLink>
            </li>
            <li>
                <NavLink to="poses">Finder</NavLink>
            </li>
        </ul>
    </nav>

}
export default Nav; 


