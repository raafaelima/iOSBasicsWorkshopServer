 /** External modules **/
 var express = require('express');
 var bodyParser = require('body-parser');
 var session = require('cookie-session');
 var cookieParser = require('cookie-parser');

 /** Internal modules **/
 var config = require('./private/config');
 var authController = require('./controllers/AuthController');
 
 /** Express setup **/
 var app = express();

 app.set('trust proxy',1) // trust first proxy
 app.set('json spaces',4);
 app.use(cookieParser());
 app.use(bodyParser.urlencoded({ extended: false}));
 app.use(session({
    keys: config.SESSION_SECRET_KEYS,
    cookie: { maxAge: 60000 }
 }))
 
 app.use('/', authController.router);
 app.get('/', function(req, res) {
    res.send('Hello! Im the workshop server. How can I help you?');
 });

 /** Server deployment **/
 var port = process.env.PORT || 5000;
 app.listen(port)

 console.log('\n--- Information ---');
 console.log('  Port:',port);
 console.log('  Cookie Session Keys:');
 for (i in config.SESSION_SECRET_KEYS) {
    console.log('    - '+config.SESSION_SECRET_KEYS[i]);
 }
