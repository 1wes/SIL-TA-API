require('dotenv').config();

const { PORT, ORIGIN } = process.env;

module.exports = {
    port: PORT,
    origin:ORIGIN
}