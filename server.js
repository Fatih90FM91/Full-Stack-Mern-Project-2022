require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./backend-server/routers/router');
const userRouter =require('./backend-server/routers/userRouter')
const questionRouter =require('./backend-server/routers/questionRouter');
const answerRouter =require('./backend-server/routers/answerRouter');
const googleRouter =require('./backend-server/routers/googleRouter')
const User2=require('./backend-server/models/socialModel');

const cookieSession =require('cookie-session');
const session =require('express-session');
const passport =require('passport/lib');
// const passportLocalMongoose = require('passport-local-mongoose');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const findOrCreate = require('mongoose-findorcreate');
// const User =require('./models/userModel');

require('./backend-server/config/mongoose');

require('./backend-server/config/passport-setup');


const app =express();
const PORT= process.env.PORT || 8080;

// app.use(session({
//     secret:"our little secret",
//     resave:false,
//     saveUninitialized:false
//   }));

  app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[process.env.KEY],
  }));


  app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["GET","HEAD","PUT","POST","DELETE"],
    preflightContinue: false,
    optionsSursccessStatus: 204,
    credentials:true
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.set('view engine', 'ejs');





app.use(router,userRouter,questionRouter, answerRouter,googleRouter);


if(process.env.NODE_ENV === 'production'){
  app.use(express.static('frontend-web/build'));
}



app.listen(PORT, console.log(`The server is listening now on port ${PORT}!!`));