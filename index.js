const express = require('express');
const db=require('./config/mongoose');
const expressLayouts=require('express-ejs-layouts');
const app = express();
const port  = 8000;


//use ejs to render views
app.set('view engine','ejs');
app.set('views','./views');
//use express router
app.use('/',require('./routes'));
app.use(expressLayouts);
app.use(express.static('./assets'));



app.listen(port,function(err)
{
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up an running on port: ${port}`);
})

