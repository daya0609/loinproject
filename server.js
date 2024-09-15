// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes/route');
/* 
npm init -y
install the package 
npm install express mongoose dotenv body-parser

and the file structure should be like this

my-login-app/
├── controllers/
│   └── user.controller.js
├── models/
│   └── user.model.js
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── user.js
│   ├── login.html
│   └── register.html
├── routes/
│   └── route.js
├── server.js
├── package.json
└── .env
*/
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', routes);

// Redirect root to login page
app.get('/', (req, res) => {
  res.redirect('/login.html');
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// server.js
app.use((req, res, next) => {
    console.log('Request Body:', req.body);
    next();
  });
  