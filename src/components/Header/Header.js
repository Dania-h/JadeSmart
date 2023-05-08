import './Header.scss';
import logo from '../../assets/icons/jadesmart-logo--icon.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <Link to="#">
                <img className='header__logo' src={logo} alt='jade green gem' />
            </Link>
            <div className='header__links'>
                <Link to="#">
                    <button className='header__links--button'>Our Mission</button>
                </Link>
                <Link to="#">
                    <button className='header__links--button header__links--border'>Login</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;