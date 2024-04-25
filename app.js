import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
import pageRoute from './routes/pageRoute.js';
import photoRoute from './routes/photoRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

// connection to db
conn();

//template engine ejs
app.set('view engine','ejs');

//static files middlewaare
app.use(express.static('public'))

//routes
app.use('/',pageRoute);
app.use('/photo',photoRoute);


/* app.get('/', (req, res) => {res.render('index');});

app.get('/about', (req, res) => {res.render('about');}); */


app.listen(port, () => {console.log(`Listening on ${port}`);});