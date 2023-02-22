const express=require('express');
const passport = require('passport');
const userController=require('../controllers/users_controller');
const router=express.Router();

console.log("User router loaded");[]

router.get('/profile',passport.checkAuthentication,userController.profile);
router.get('/sign-in',userController.SignIn);
router.get('/sign-up',userController.SignUp);
router.get('/sign-out',userController.destroySession);
router.post('/create',userController.create);
//router.post('/create-session',userController.createSession);

//Use passport as a middleware to create authentication
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
),userController.createSession);


module.exports=router;

