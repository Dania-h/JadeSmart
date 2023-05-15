import './LessonsHeader.scss'
import logo from '../../../../assets/icons/jadesmart-logo--icon.svg'
import { Link } from 'react-router-dom';

function LessonsHeader({ setNewHeader }) {
    return (
        <header className='header'>
            <Link onClick={() => setNewHeader(false)} className='header__links' to="/">
                <img className='header__logo' src={logo} alt='jade green gem' />
                <h2 className='header__link'>JadeSmart</h2>
            </Link>
            <Link to="#">
                <button className='header__button'>Login</button>
            </Link>
        </header>
    );
}

export default LessonsHeader;