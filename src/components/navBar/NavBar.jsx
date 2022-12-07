import { Link } from 'react-router-dom';
import './NavBarStyle.css';

const NavBar = () => {
    return (
        <div className='header'>
            <nav className="menu">
                <li className="menu-item">
                    <Link to='/' id='menu-home'>Home</Link>
                </li>
                <li className="menu-item">
                    <Link to='/Storia' id='menu-storia'>La nostra storia</Link>
                </li>
                <li className="menu-item">
                    <Link to='/Ottica' id='menu-otica'>Ottica</Link>
                </li>
                <li className="menu-item">
                    <Link to='/Visite' id='menu-visite'>Visite</Link>
                </li>
                <li className="menu-item">
                    <button className="btn btn-primary" type="button" id="button"><a href="#vieneATrovarci"></a>
                        <p id="viene">Viene a
                            trovarci</p>
                    </button>
                </li>
            </nav>

        </div>
    )
}


export default NavBar;