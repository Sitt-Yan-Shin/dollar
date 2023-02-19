const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
const timeRoute = require('./routes/updated');

app.use('/posts', postsRoute);
app.use('/time', timeRoute);

//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URI, () => console.log('connected to DB'))


app.listen(PORT, () => console.log('Server is running...'));