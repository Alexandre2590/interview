var express = require('express');
var app = express();
const bodyParser = require('body-parser');



var indexRouter = require('./routes/index');


app.engine('.html', require('ejs').renderFile);


app.use(bodyParser.urlencoded({ extended: false }));




app.use('/', indexRouter);




app.listen(4000, () => console.log('My app listening on port 4000! '));


