import './Lesson3.scss';
import StockChart from '../StockChart/StockChart';
import infographic from '../../assets/images/Apple-stock-chart-770x576.png';
import back from '../../assets/icons/arrow-back.svg';
import { Link } from 'react-router-dom';

function Lesson3() {
    return (
        <article className='lesson'>
            <Link to='/lessons'>
                <img className='lesson__icon' src={back} alt='back arrow' />
            </Link>
            <h1>Interpreting Stock Information</h1>
            <p>When you first laid eyes on a stock chart, the sheer amount of data may have seemed overwhelming. The good news is that, when broken down, each data point has a very clear and specific meaning. Let's look at the example below:</p>
            <img src={infographic} alt='apple stock chart' />
            <StockChart />
        </article>
    );
}

export default Lesson3;