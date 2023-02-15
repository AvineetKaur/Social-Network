const express=require('express');
const userController=require('../controllers/users_controller');
const router=express();

console.log("User router loaded");

router.get('/profile',userController.profile);

module.exports=router;

