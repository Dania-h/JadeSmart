import './Hero.scss';

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
            <button className='hero__button'>Get Started</button>
        </article>
    );
}

export default Hero;