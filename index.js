const express = require('express');
const app = express();
const port  = 8000;

//use express router
app.use('/',require('./routes'));

//use ejs to render views
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err)
{
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up an running on port: ${port}`);
})
