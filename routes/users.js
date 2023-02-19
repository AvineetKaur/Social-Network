const express=require('express');
const userController=require('../controllers/users_controller');
const router=express.Router();

console.log("User router loaded");

router.get('/profile',userController.profile);
router.get('/sign-in',userController.SignIn);
router.get('/sign-up',userController.SignUp);

module.exports=router;

