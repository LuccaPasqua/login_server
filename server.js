//mongodb
require('dotenv').config();
require('./config/db');

const app = require('express')();
const port = process.env.PORT || 3000;

const UserRouter = require('./api/User');

// For accepting post form data
const bodyParser = require('express').json
app.use(bodyParser());

app.use('/users', UserRouter)
app.get('/', (req,res) => {
  res.send('I love you')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
