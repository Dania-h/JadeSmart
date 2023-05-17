import './Lesson3Quiz.scss';
import back from '../../assets/icons/arrow-back.svg';
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
    const [currentQuestion, setCurrentQuestion] = useState(0);

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

    //Targeting the latest (last) data from the array provided by the axios call
    const lastData = stockData?.slice(-1)[0];
    const lastPrice = lastData?.c;
    const lastDate = dayjs(lastData?.t).format('MMM DD');

    //created for one of the quiz questions
    const previousClose = stockData?.slice(-2)[0];

    //Creating a small array with objects for the quiz
    const questions = [
        {
            text: "What is the current share price?",
            options: [
                { id: 0, answer: '$113.4', isCorrect: false },
                { id: 1, answer: '$05.17', isCorrect: false },
                { id: 2, answer: `$${lastPrice}`, isCorrect: true },
            ],
        },
        {
            text: "What was the previous day's close price?",
            options: [
                { id: 0, answer: `$${previousClose?.c}`, isCorrect: true },
                { id: 1, answer: `$${lastPrice}`, isCorrect: false },
                { id: 2, answer: '$111.20', isCorrect: false },
            ],
        },
        {
            text: "This month's high and low were what price, respectively?",
            options: [
                { id: 0, answer: '$112.18 / $103.63', isCorrect: false },
                { id: 1, answer: `$${lastPrice} / $103.63`, isCorrect: true },
                { id: 2, answer: `$${lastPrice} / $110.26`, isCorrect: false },
            ],
        },

    ]

    //Click handler when user chooses an option
    const answerClick = (isCorrect) => {
        if (isCorrect) {
            alert('Correct!');
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                const showButton = document.querySelector('.hide');
                showButton.classList.remove('hide');
            }
        } else {
            alert('Try again...');
        }
    }

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
                <p className='quiz--price'>{lastPrice} <span className='quiz--gray'>USD</span></p>
                <p>{lastDate}</p>
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
            <div className='quiz__container'>
                <h3>{questions[currentQuestion].text}</h3>
                <ul>
                    {questions[currentQuestion].options.map((option) => {
                        return (
                            <li onClick={() => answerClick(option.isCorrect)} key={option.id}>{option.answer}</li>
                        );
                    })}
                </ul>
                <Link to='/lessons'>
                    <button className='hide quiz__finish'>FINISH</button>
                </Link>
            </div>
        </section>
    );
}

export default Lesson3Quiz;