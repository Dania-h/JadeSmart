import './Footer.scss';
import logo from '../../assets/icons/jadesmart-logo--icon.svg';
import instagram from '../../assets/icons/instagram-white.png';
import twitter from '../../assets/icons/twitter-white.png';
import facebook from '../../assets/icons/facebook-white.png';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__head-div'>
                <img className='footer__logo' src={logo} alt='jade' />
                <h3>JadeSmart</h3>
            </div>
            <div className='footer__contact-div'>
                <h4>CONTACT</h4>
                <a href='tel:1-800-010-5233'>1-800-010-5233</a>
                <a href='mailto:contact@jadesmart.com'>contact@jadesmart.com</a>
            </div>
            <div className='footer__icons'>
                <a href="https://www.instagram.com/">
                    <img className='footer__icons--icon' src={instagram} alt='instagram' />
                </a>
                <a href="https://www.twitter.com/">
                    <img className='footer__icons--icon' src={twitter} alt='twitter' />
                </a>
                <a href="https://www.facebook.com/">
                    <img className='footer__icons--icon' src={facebook} alt='facebook' />
                </a>
            </div>
            <p className='footer__copyright'>© JadeSmart 2023. All Rights Reserved</p>
        </footer>
    );
}

export default Footer;