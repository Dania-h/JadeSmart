import './RoiCalculator.scss';
import dayjs from 'dayjs';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';


function RoiCalculator() {
    const [stockData, setStockData] = useState([]);

    const API_key = process.env.REACT_APP_API_key; //my api key present in env
    const baseUrl = 'https://finnhub.io/api/v1/'

    //This axios call retrieves stock data from finnhub. Arguments needed are stock symbol, resolution (60, D, W, M), and timeframe in unix
    useEffect(() => {
        axios.get(`${baseUrl}stock/candle?symbol=AAPL&resolution=D&from=1680307200&to=1682899140&token=${API_key}`)
            .then(response => {
                setStockData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [baseUrl, API_key]);

    console.log(stockData);

    const data = [
        {
            date: dayjs.unix(1680480000).format('MM/DD'),
            price: 4000,
        },
        {
            date: dayjs.unix(1680566400).format('MM/DD'),
            price: 3000,
        },
        {
            date: dayjs.unix(1680652800).format('MM/DD'),
            price: 2000,
        },
        {
            date: dayjs.unix(1680739200).format('MM/DD'),
            price: 2780,
        },
        {
            date: dayjs.unix(1681084800).format('MM/DD'),
            price: 1890,
        },
        {
            date: dayjs.unix(1681171200).format('MM/DD'),
            price: 2390,
        },
        {
            date: dayjs.unix(1681257600).format('MM/DD'),
            price: 3490,
        },
    ];

    return (
        <main className='stocks'>
            <div className='stocks__chart'>
                <ResponsiveContainer>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="date" stroke='#EDF7F6' tickLine={false} />
                        <YAxis stroke='#EDF7F6' hide={true} />
                        <Tooltip 
                        labelStyle={{ color: '#EDF7F6' }}
                        contentStyle={{ backgroundColor: '#122535' }} />
                        <Line dataKey="price" stroke="#01B36C" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}

export default RoiCalculator;