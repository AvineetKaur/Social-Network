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
//used for storing session cookie in db
const MongoStore=require('connect-mongo');
const sassMiddleware=require('node-sass-middleware');

app.use(sassMiddleware({
    src:'/assets/scss',
    dest:'/assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'
}));

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
    },

    store: MongoStore.create(
        {
            mongoUrl:'mongodb://0.0.0.0:27017/SocialWebsiteDev',
            autoRemove: 'disabled'
        
        },
    function(err)
    {
        console.log(err||'connect-mongodb setup ok');
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'));
app.listen(port,function(err)
{
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up an running on port: ${port}`);
})

