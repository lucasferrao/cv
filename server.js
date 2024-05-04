//Configure the server
const port = process.env.PORT || 8080;
const express = require('express'); //express: routing
const app = express();
const cookieParser = require('cookie-parser');

//Make the <Folder Name> accessible
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));

//App running on localhost:8080 || 127.0.0.1:8080
app.listen(port, function(err){
    if (!err) {
      console.log("Your app is listening on port " + port + ".");
    } else {
      console.log(err);
    }
  });

  
  //Implement Cookies
  app.use(cookieParser());
  app.use(function (req, res, next) {
    // check if client sent cookie
    var cookie = req.cookies.cookieName;
    if (cookie === undefined) {
        // no: set a new cookie
        var randomNumber = Math.random().toString();
        randomNumber = randomNumber.substring(2, randomNumber.length);
        res.cookie('cookieName', randomNumber, {
            maxAge: 900000,
            httpOnly: true,
            secure: true
        });
        console.log('cookie created successfully');
    } else { // yes, cookie was already present
        console.log('cookie exists', cookie);
    }
    next(); // <-- important!
  });

  //Routes' path for each controller
  const homeRouter = require('./routes/main');
  app.use('/', homeRouter);
  const bioRouter = require('./routes/main');
  app.use('/biography', bioRouter);
  const educationRouter = require('./routes/main');
  app.use('/education', educationRouter);
  const skillsRouter = require('./routes/main');
  app.use('/skills', skillsRouter);
  const contactRouter = require('./routes/main');
  app.use('/contact', contactRouter);
  
  //Export modules & incorporate loader.js file
  module.exports = app;
  