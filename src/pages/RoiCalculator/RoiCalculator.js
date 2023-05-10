function RoiCalculator() {
    const API_key = process.env.REACT_APP_API_key;

    const alpha = require('alphavantage')({ key: API_key }); //In lieu of calling with axios, using the npm to call data

    // alpha.data.monthly('tsla')
    //  .then((data) => {
    //     console.log(data);
    //   })
    //  .catch(err => {
    //     console.error(err);
    // });

    return (
      <>
        Stocks here...
      </>
    );
  }
  
  export default RoiCalculator;