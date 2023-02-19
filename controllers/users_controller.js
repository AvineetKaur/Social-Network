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

