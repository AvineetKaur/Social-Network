//require library
const mongoose=require('mongoose');

//connect to db using Connection string
mongoose.connect('mongodb://localhost/SocialWebsiteDev');

//aquire the connection to see if its successful or not
const db=mongoose.connection;

db.on('error',function(err){
    console.log(`Error in connecting to database is:${err.Message}`);
});

db.once('open',function(){
    console.log("Successful connection to DB")
})
