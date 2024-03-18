const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./router/admin');
const userRoutes = require('./router/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(userRoutes);

app.use((req,res)=>{
    res.status(404).send('<h1>404 Not Found</h1>');
})



app.listen(3000, () => {console.log('listening on 3000');});   