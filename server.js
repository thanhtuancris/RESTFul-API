const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/index');
const db = require('./configs/connect.database');


const app = express();


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded: true}));

//routes init
routes(app);

const port = 3000;

db.connect();

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});