const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const blueprintType = require('./controllers/blueprintType');
require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('index.js', blueprintType);

app.listen(3000, () => {
    console.log('listening on port 3000');
});