import './StockChart.scss';
import dayjs from 'dayjs';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';


function StockChart({ stockData }) {

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