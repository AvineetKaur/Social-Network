//require library
const mongoose=require('mongoose');

//connect to db using Connection string
mongoose.connect('mongodb://0.0.0.0:27017/SocialWebsiteDev');

//aquire the connection to see if its successful or not
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error in connecting to MongoDB"));

db.once('open',function(){
    console.log("Successful connection to DB")
});

module.exports=db;
