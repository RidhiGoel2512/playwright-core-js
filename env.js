const dotenv = require('dotenv');
const environment = process.env.TEST_ENV || 'qa'

dotenv.config(
    {
        path:`.env.${environment}`
    }
)

module.exports={
    environment,
    baseUrl : process.env.BASE_URL,
    apiBaseUrl:process.env.API_BASE_URL,
    username: process.env.LOGIN_USERNAME,
    password: process.env.LOGIN_PASSWORD
};
