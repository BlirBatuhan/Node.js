import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
import pageRoute from './routes/pageRoute.js';
import photoRoute from './routes/photoRoute.js';
import userRoute from './routes/userRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

// connection to db
conn();

//template engine ejs
app.set('view engine','ejs');

//static files middlewaare
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

//routes
app.use('/',pageRoute);
app.use('/photos',photoRoute);
app.use('/users',userRoute);


/* app.get('/', (req, res) => {res.render('index');});

app.get('/about', (req, res) => {res.render('about');}); */


app.listen(port, () => {console.log(`Listening on ${port}`);});