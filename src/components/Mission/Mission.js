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
        <section id='mission' className='mission'>
            <img className='mission__img' data-aos='fade-up' src={coinman} alt='man reading atop large coins' />
            <div>
                <h2 data-aos='fade-up' data-aos-delay='200'>STEPPING TOWARD FINANCIAL ACCESSIBILITY</h2>
                <p className='mission__p' data-aos='fade-up' data-aos-delay='400'>JadeSmart is built with the average, everyday individual in mind. We create comprehensible and interactive financial literacy lessons to break down the barrier between you and the "experts".</p>
            </div>
        </section>
    );
}

export default Mission;