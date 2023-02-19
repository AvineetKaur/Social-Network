module.exports.home=function(req,res)
{
   console.log(req.cookies);
    return res.render('home',{
        title:'Home'
    });
}
module.exports.posts=function(req,res)
{
    res.end("<h2> These are all posts</h2");
}

// module.exports.actionName = function(req, res){}