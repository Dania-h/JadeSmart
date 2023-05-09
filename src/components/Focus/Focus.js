import './Focus.scss';
import money from '../../assets/icons/money-white.png';
import checklist from '../../assets/icons/checklist_white_24dp.svg';
import book from '../../assets/icons/menu_book_white_24dp.svg';
import stocks from '../../assets/icons/stock-market-white.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Focus() {
    //provides animate-on-scroll
    Aos.init({
        duration: 600,
        easing: 'ease-in'
    });

    return (
        <section className='focus'>
            <img className='focus__top-img' src={money} alt='dollar bills' />
            <h2 data-aos='fade-left'>FINANCE AT YOUR FINGERTIPS</h2>
            <p className='focus__p' data-aos='fade-left'>Follow our straightforward approach to learning.</p>
            <div className='focus__instructions'>
                <div className='focus__instructions--single' data-aos='fade-down'>
                    <img src={checklist} alt='checklist' />
                    <p>Build a focused list of your most important financial goals.</p>
                </div>
                <div className='focus__instructions--single' data-aos='fade-down'>
                    <img src={book} alt='open book' />
                    <p>Work through a library of lessons curated specifically for you.</p>
                </div>
                <div className='focus__instructions--single' data-aos='fade-down'>
                    <img className='focus__icon' src={stocks} alt='rising stock' />
                    <p>Use your learnings in realistic, simulated practice.</p>
                </div>
            </div>
        </section>
    );
}

export default Focus;