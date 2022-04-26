var express = require('express');
var app = express();
const bodyParser = require('body-parser');



var indexRouter = require('./routes/index');
var auth = require('./routes/auth-routes');


app.engine('.html', require('ejs').renderFile);


app.use(bodyParser.urlencoded({ extended: false }));




app.use('/', indexRouter);
app.use('/auth', auth);




app.listen(4000, () => console.log('My app listening on port 4000! '));


