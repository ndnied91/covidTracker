

const axios = require('axios');

axios.get('https://covid19-us-api.herokuapp.com/county')
  .then(response => {
    console.log(response.data.message.length)
    //
    // response.data.message.forEach( (county)=>{
    //   console.log(county)
    // })
  })
  .catch(error => {
    console.log(error);
  });
