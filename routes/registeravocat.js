const { response, Router } = require("express");

const exprees = require('express');
const router =  exprees.Router();




router.get('/',(req,res)=>{
    res.render('AvocatRegister');
})


module.exports = router;