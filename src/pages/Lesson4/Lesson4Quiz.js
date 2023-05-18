import back from '../../assets/icons/arrow-back.svg';
import axios from 'axios';
import dayjs from 'dayjs';
import StockChart from '../Lessons/components/StockChart/StockChart';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Lesson4Quiz() {
    const [stockData, setStockData] = useState([]);

    const API_key = process.env.REACT_APP_API_key; //my api key present in env
    const baseUrl = 'https://finnhub.io/api/v1/'

    //This axios call retrieves stock data from finnhub. Arguments needed are stock symbol, resolution (60, D, W, M), and timeframe in unix
    useEffect(() => {
        axios.get(`${baseUrl}stock/candle?symbol=TSLA&resolution=M&from=1527811200&to=${dayjs().unix()}&token=${API_key}`)
            .then(response => {
                const formattedData = response.data.c.map((value, index) => ({ //iterates through the "c" object in the response
                    c: value,
                    t: dayjs.unix(response.data.t[index]).format('MM/YYYY'), //formatting the date from the "t" response
                }));

                setStockData(formattedData);
            })
            .catch(error => {
                console.log(error);
            });
    }, [baseUrl, API_key]);

    //Targeting the latest (last) data from the array provided by the axios call
    const lastData = stockData?.slice(-1)[0];
    const lastPrice = lastData?.c;
    const lastDate = lastData?.t;

    return (
        <section className='quiz'>
            <div className='quiz__head-div'>
                <Link to='/lessons/4'>
                    <img className='lesson__icon' src={back} alt='back arrow' />
                </Link>
                <div>
                    <h1>Time to practice!</h1>
                </div>
            </div>
            <div className='quiz--margins'>
                <h2>Tesla Inc.</h2>
                <p className='quiz--gray'>TSLA</p>
            </div>
            <div className='quiz--margins'>
                <p className='quiz--price'>{lastPrice} <span className='quiz--gray'>USD</span></p>
                <p>{lastDate}</p>
            </div>
            <StockChart stockData={stockData} />
            <p>This stock graph tracks Tesla stocks over the last 5 years. Calculate your ROI if you had invested exactly 5 years ago (excluding dividends, compounding, etc.).</p>
            <div className='hide'>

                <Link to='/lessons'>
                    <button className='quiz__finish'>FINISH</button>
                </Link>
            </div>
        </section>
    );
}

export default Lesson4Quiz;