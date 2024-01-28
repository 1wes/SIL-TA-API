const express = require('express');
const app = express();
const cors = require('cors');

const { port } = require('./config/env-config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:'localhost',
    credentials:true
}));

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
