function RoiCalculator() {
    const API_key = process.env.REACT_APP_API_key;

    const alpha = require('alphavantage')({ key: API_key });

    alpha.data.monthly('tsla').then((data) => {
        console.log(data);
      });

    return (
      <>
        Stocks here...
      </>
    );
  }
  
  export default RoiCalculator;