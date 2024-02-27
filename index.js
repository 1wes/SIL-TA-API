const express = require('express');
const app = express();
const cors = require('cors');

const { port, origin } = require('./config/env-config');

const albums = require('./routes/albums');
const users = require('./routes/users');
const photos = require('./routes/photos');

// global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:[origin, "http://localhost:5173", "http://localhost:3000", "https://1wes.github.io"],
    credentials:true
}));

app.use("/api", albums);
app.use("/api", users);
app.use("/api", photos);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
