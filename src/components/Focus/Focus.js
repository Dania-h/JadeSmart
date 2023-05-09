import './Focus.scss';
import house from '../../assets/images/focus-photo.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Focus() {
    //provides animate-on-scroll
    Aos.init({
        duration: 800,
        easing: 'ease-in'
    });

    return (
        <section className='focus'>
            <img className='focus__img' data-aos='fade-left' src={house} alt='miniature house next to keys' />
            <div>
                <h2 data-aos='fade-left' data-aos-delay='400'>FOCUS ON THE IMPORTANT THINGS</h2>
                <p className='focus__p' data-aos='fade-left' data-aos-delay='600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </div>

        </section>
    );
}

export default Focus;