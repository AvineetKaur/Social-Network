const express = require('express');
const cookieParser = require('cookie-parser');

const expressLayouts=require('express-ejs-layouts');
const app = express();
const port  = 8000;
const db=require('./config/mongoose');
//used for session cookie
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');


app.use(express.urlencoded());
app.use(cookieParser());

//use express router
app.use(express.static('./assets'));
app.use(expressLayouts);

//extract style and scripts from sub pages into the layout
app.set("layout extractStyles",true);
app.set("layout extractScripts",true);

//use ejs to render views
app.set('view engine','ejs');
app.set('views','./views');

//for passport session
app.use(session({
    name:'SocialNetwork',
    //TODO change the secrete befor deployment to production
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/',require('./routes'));
app.listen(port,function(err)
{
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up an running on port: ${port}`);
})

