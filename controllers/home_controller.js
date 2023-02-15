module.exports.home=function(req,res)
{
   
    return res.end('<h1>Express is up and running</h1>');
}
module.exports.posts=function(req,res)
{
    res.end("<h2> These are all posts</h2");
}