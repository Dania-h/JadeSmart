import './Lesson3.scss';
import infographic from '../../assets/images/Apple-stock-chart-770x576.png';
import back from '../../assets/icons/arrow-back.svg';
import next from '../../assets/icons/chevron_right_FILL0_wght400_GRAD0_opsz48.svg';
import { Link } from 'react-router-dom';

function Lesson3() {
    return (
        <article className='lesson'>
            <div className='lesson__head-div'>
                <Link to='/lessons'>
                    <img className='lesson__icon' src={back} alt='back arrow' />
                </Link>
                <h1>Interpreting Stock Information</h1>
            </div>
            <p className='lesson__p-block'>When you first laid eyes on a stock chart, the sheer amount of data may have seemed overwhelming. The good news is that, when broken down, each data point has a very clear and specific meaning. Let's look at the example for Apple below:</p>
            <img className='lesson__graphic' src={infographic} alt='apple stock chart' />
            <p>On March 2nd, the stock price was $125.12 by the end of market hours, which go from 9:30 AM to 4 PM Eastern Time. The price during "after hours" was $125.15. Ultimately, the closing price for this day was $2.67 lower than the previous day's close price at $127.79.</p>
            <p className='lesson__p-block'>On the lower potion of the graph, we also see:</p>
            <ul>
                <li>
                    <span>"Open"</span> - the first price at which the stock traded when market hours opened.
                </li>
                <li>
                    <span>"High" and "low"</span> - the highest and lowest prices the stock reached during these hours.
                </li>
                <li>
                    <span>"Mkt cap"</span>, or market cap - denotes the company's value by multiplying the total number of shares by the current share price.
                </li>
                <li>
                    <span>"PE ratio"</span>, or price-to-earnings ratio - used to decide whether a stock is fairly valued by dividing the market price by the earnings per share.
                </li>
                <li>
                    <span>"Dividend yield"</span> - the percentage of the current share price that an investor receives annually as cash payments, or dividends.
                </li>
                <li>
                    <span>"52-week high" and "low"</span> - the highest and lowest price the stock traded for in the previous 52 weeks.
                </li>
            </ul>
            <div className='lesson__button-div'>
                <Link to='/lessons/3/quiz'>
                    <button className='lesson__next-button'>
                        Next
                        <img className='lesson__next-button--icon' src={next} alt='next arrow' />
                    </button>
                </Link>
            </div>
        </article>
    );
}

export default Lesson3;