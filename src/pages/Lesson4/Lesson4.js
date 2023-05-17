import back from '../../assets/icons/arrow-back.svg';
import next from '../../assets/icons/chevron_right_FILL0_wght400_GRAD0_opsz48.svg';
import calculation from '../../assets/images/ROI-calculation.png';
import { Link } from 'react-router-dom';

function Lesson4() {
    return (
        <article className='lesson'>
            <div className='lesson__head-div'>
                <Link to='/lessons'>
                    <img className='lesson__icon' src={back} alt='back arrow' />
                </Link>
                <h1>Returns Calculator</h1>
            </div>
            <p className='lesson__p-block'>Whether you're a passive or active investor, a reasonable balance of evaluating the performance of your investments is still necessary. One of the ways investors measure performance is by calculating their <span>return on investment (ROI)</span>.</p>
            <p className='lesson__p-block'>The simplest way of calculating return is:</p>
            <img className='lesson__graphic' src={calculation} alt='(money gained - money spent)/money spent x 100' />
            <p className='lesson__p-block'>The net return on investment refers to money earned from things such as dividends or selling. This is subtracted by things such as commission fees. Below, the cost of investment is how much you spent on buying the shares.</p>
            <div className='lesson__button-div'>
                <Link to='/lessons/4/quiz'>
                    <button className='lesson__next-button'>
                        Next
                        <img className='lesson__next-button--icon' src={next} alt='next arrow' />
                    </button>
                </Link>
            </div>

        </article>
    );
}

export default Lesson4;