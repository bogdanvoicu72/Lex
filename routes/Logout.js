const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/',(req,res)=>{
    res.cookie('id',"", { maxAge: 900000, httpOnly: true });
    res.cookie('email',"", { maxAge: 900000, httpOnly: true });
    res.redirect('Login')
});



module.exports = router;