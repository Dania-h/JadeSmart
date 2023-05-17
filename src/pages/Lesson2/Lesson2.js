import back from '../../assets/icons/arrow-back.svg'
import { Link } from 'react-router-dom';

function Lesson2() {
    return (
        <article className='lesson'>
            <div className='lesson__head-div'>
                <Link to='/lessons'>
                    <img className='lesson__icon' src={back} alt='back arrow' />
                </Link>
                <h1>Investment Planning</h1>
            </div>
            <p>Coming soon...</p>
        </article>
    );
}

export default Lesson2;