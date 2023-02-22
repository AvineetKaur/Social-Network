const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user');

//authentication using passport
passport.use(new LocalStrategy({
    usernameField:'email'
},function(email,password,done){
    //find the user and establish the identity
    User.findOne({email:email},function(err,user){
        if(err){console.log("Error in finding user in DB-->passport");return done(err);}
        if(!user||user.password!=password)
        {
            console.log("Invalid Username or paasword!")
            return done(null,false);
        }
      
        return done(null,user);

    });
}));

//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    console.log("User is found "+user.id);
    done(null,user.id);
});

//deserializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err)
        {console.log("Error in finding user--> passport");return done(err);}
    return done(null,user);
    });
});

//check if user is authenticated for sending data to views
passport.checkAuthentication=function(req,res,next){
    //if user is signed in, then pass on the request to next function(controller's action)
    if(req.isAuthenticated()){
        return next();
    }
    //if user is not signed in
    return res.redirect('/users/sign-in');
}
//set users for views
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        //req.user contains the current signed in user from the cookies and we are sending the same in res.locals
        res.locals.user=req.user;
    }
    next();
}


module.exports=passport;