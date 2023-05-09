import './Mission.scss';
import coinman from '../../assets/images/mission-photo.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Mission() {
    //provides animate-on-scroll
    Aos.init({
        duration: 800,
        easing: 'ease-in'
    });

    return (
        <section className='mission'>
            <img className='mission__img' data-aos='fade-right' src={coinman} alt='man reading atop large coins' />
            <div>
                <h2 data-aos='fade-right' data-aos-delay='400'>OUR MISSION</h2>
                <p className='mission__p' data-aos='fade-right' data-aos-delay='600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </div>
        </section>
    );
}

export default Mission;