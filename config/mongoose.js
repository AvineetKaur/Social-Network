//require library
const mongoose=require('mongoose');

const ConnectionString='mongodb://0.0.0.0:27017/SocialWebsiteDev';
//connect to db using Connection string
mongoose.connect(ConnectionString);

//aquire the connection to see if its successful or not
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error in connecting to MongoDB"));

db.once('open',function(){
    console.log("Successful connection to DB")
});

module.exports=db;
