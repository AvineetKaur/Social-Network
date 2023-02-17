const express=require('express');
const homecontroller=require('../controllers/home_controller');
const router=express.Router();

console.log("Router loaded");
router.get('/',homecontroller.home);
router.use('/users',require('./users'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));
module.exports=router;






