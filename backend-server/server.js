require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routers/router');
const userRouter =require('./routers/userRouter')
const questionRouter =require('./routers/questionRouter');
const answerRouter =require('./routers/answerRouter');
const googleRouter =require('./routers/googleRouter')
const User2=require('./models/socialModel');

const cookieSession =require('cookie-session');
const session =require('express-session');
const passport =require('passport');
// const passportLocalMongoose = require('passport-local-mongoose');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const findOrCreate = require('mongoose-findorcreate');
// const User =require('./models/userModel');

require('./config/mongoose');

require('./config/passport-setup');


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