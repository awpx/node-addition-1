const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();

//import routes
const postsRoute = require('./routes/posts')

//middleware
app.use(cors())
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
  res.send('Welcome at homes')
})

//connect to db
mongoose.connect(
  process.env.DB_CONNECT, 
  { useNewUrlParser: true,
    useUnifiedTopology: true 
  },
  () => {
    console.log('db connected')
});

//Start Listen to server
app.listen(3000)