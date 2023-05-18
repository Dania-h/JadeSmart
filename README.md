
# JadeSmart

JadeSmart is a web app that provides focused and beginner-friendly 
financial education through brief and interactive lessons, making financial literacy more accessible for the average person.


## Features

- Lesson dashboard/hub
- Real-time stock data
- Interactive graphs
- Quiz with dynamic real-time answer choices


## Installation

1. Get a free API Key at https://finnhub.io/

2. Clone the repo
git clone https://github.com/Dania-h/JadeSmart.git

3. Install NPM packages
npm install

4. Enter your API in .env
REACT_APP_API_key = 'ENTER YOUR API';
## Tech Stack

**Client:** React

**Server:** Firebase

**Libraries:** Recharts, Sass, Dayjs, Axios, Aos


## API Reference

#### Get candles

```http
  GET /api/v1
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Example GET

`/stock/candle?symbol=AAPL&resolution=1&from=1679476980&to=1679649780`