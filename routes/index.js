const express=require('express');
const homecontroller=require('../controllers/home_controller');
const router=express.Router();

console.log("Router loaded");
router.get('/',homecontroller.home);
router.use('/users',require('./users'));

module.exports=router;
