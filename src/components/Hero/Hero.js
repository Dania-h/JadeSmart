import './Hero.scss';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <article className='hero'>
            <h1>JadeSmart</h1>
            <div className='hero__description'>
                <p className=''>Welcome to financial</p>
                <div className=' hero__words-div'>
                    <span>knowledge...</span>
                    <span>freedom...</span>
                    <span>empowerment...</span>
                    <span>knowledge...</span>
                </div>
            </div>
            <Link to='/stocksim'>
                <button className='hero__button'>Get Started</button>
            </Link>
        </article>
    );
}

export default Hero;