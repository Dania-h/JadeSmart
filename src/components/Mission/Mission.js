import './Mission.scss';
import coinman from '../../assets/images/mission-photo.png'

function Mission() {
    //The following block of code is a side animation for when the user scrolls to this section.
    // const animateElements = document.querySelectorAll('.hidden');
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         console.log(entry);
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('show');
    //         } else {
    //             entry.target.classList.remove('show');
    //         }
    //     });
    // });
    // animateElements.forEach((el) => observer.observe(el));
    
    return (
        <section className='mission'>
            <img className='mission__img hidden' src={coinman} alt='man reading atop large coins' />
            <div>
                <h2 className='hidden'>Our Mission</h2>
                <p className='mission__p hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </div>
        </section>
    );
}

export default Mission;