import './Lesson3Quiz.scss';
import back from '../../assets/icons/arrow-back.svg';
import 'dayjs/locale/en';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
dayjs.extend(utc);
dayjs.extend(timezone);


function Lesson3Quiz() {
    const [stockData, setStockData] = useState([]);

    const API_key = process.env.REACT_APP_API_key; //my api key present in env
    const baseUrl = 'https://finnhub.io/api/v1/'

    //This axios call retrieves stock data from finnhub. Arguments needed are stock symbol, resolution (60, D, W, M), and timeframe in unix
    useEffect(() => {
        axios.get(`${baseUrl}stock/candle?symbol=AMZN&resolution=D&from=1682985600&to=${dayjs().unix()}&token=${API_key}`)
            .then(response => {
                const formattedData = response.data.c.map((value, index) => ({ //iterates through the "c" object in the response
                    c: value,
                    t: dayjs.unix(response.data.t[index]).tz('Etc/GMT').format('MM/DD'), //formatting the date from the "t" response
                }));

                setStockData(formattedData);
            })
            .catch(error => {
                console.log(error);
            });
    }, [baseUrl, API_key]);

    return (
        <section className='quiz'>
            <div className='quiz__head-div'>
                <Link to='/lessons/3'>
                    <img className='lesson__icon' src={back} alt='back arrow' />
                </Link>
                <div>
                    <h1>Time to practice!</h1>
                    <p>Use the following chart to answer the questions:</p>
                </div>
            </div>
            <div className='quiz--margins'>
                <h2>Amazon.com, Inc.</h2>
                <p className='quiz--gray'>AMZN</p>
            </div>
            <div className='quiz--margins'>
                <p className='quiz--price'>114.90 <span className='quiz--gray'>USD</span></p>
                <p>May</p>
            </div>
            <div className='chart'>
                <ResponsiveContainer>
                    <LineChart
                        width={500}
                        height={300}
                        data={stockData}
                        margin={{
                            top: 5,
                            right: 5,
                            left: 5,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="4" opacity={0.1} />
                        <XAxis dataKey="t" stroke='#EDF7F6' opacity={0.5} tickLine={false} />
                        <YAxis stroke='#EDF7F6' hide={true} domain={[100, 120]} />
                        <Tooltip
                            labelStyle={{ color: '#EDF7F6' }}
                            contentStyle={{ backgroundColor: '#122535', borderRadius: "20px" }} />
                        <Line dataKey="c" stroke="#01B36C" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}

export default Lesson3Quiz;