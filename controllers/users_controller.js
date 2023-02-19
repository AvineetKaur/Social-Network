const User=require('../models/user');

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    });
}

//render sign up page
module.exports.SignUp=function(req, res){
    return res.render('user_sign_up',{
        title:'Sign Up'
    })
}

//render sign in page
module.exports.SignIn=function(req, res){
    return res.render('user_sign_in',{
        title:'Sign In'
    })
}

//get the sign up data
module.exports.create=function(req,res){
    //if password doesnt match, navigate to the sign up page
   if(req.body.password!=req.body.confirmPassword)
    {
       res.redirect('back');
    }
    //find the user in the databse
    User.findOne({email:req.body.email},function(err,user){
        
        if(err)
            {console.log("Error in finding the user");return;}
        //if no user found, the create the user    
        if(!user)
        {
            //user creation query
            User.create(req.body,function(err,User){
                if(err)
                    {console.log("Error in creating the user");return;}
                return res.redirect('/users/sign-in');
             });
        }
        return res.redirect('back');
    })
}

module.exports.createSession=function(req,res){

    //find if user is present in db or not
    User.findOne({email:req.body.email},function(err,user){
        if(err)
        {
            console.log("Error in finding user in database");return;
        }
        //if user is found in db, then check for passowrd matching
        if(user)
        {
            console.log(user);
            //checking if the password entered is correct
            if(req.body.password!=user.password)
            {
                console.log("Password not matching");
               return res.redirect('back');
            }
            //if its correct, then store user.id in cookie
            res.cookie('user_id',user.id);
            console.log(req.cookies);
            res.redirect('/users/profile');
        }else{
            res.redirect('/users/sign-up');
        }
    })
}

