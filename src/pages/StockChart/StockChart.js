import './StockChart.scss';
import dayjs from 'dayjs';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';


function StockChart() {
    const [stockData, setStockData] = useState([]);

    const API_key = process.env.REACT_APP_API_key; //my api key present in env
    const baseUrl = 'https://finnhub.io/api/v1/'

    //This axios call retrieves stock data from finnhub. Arguments needed are stock symbol, resolution (60, D, W, M), and timeframe in unix
    useEffect(() => {
        axios.get(`${baseUrl}stock/candle?symbol=AAPL&resolution=M&from=1527811200&to=${dayjs().unix()}&token=${API_key}`)
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

    return (
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
                        <YAxis stroke='#EDF7F6' hide={true} />
                        <Tooltip
                            labelStyle={{ color: '#EDF7F6' }}
                            contentStyle={{ backgroundColor: '#122535', borderRadius: "20px" }} />
                        <Line dataKey="c" stroke="#01B36C" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
    );
}

export default StockChart;