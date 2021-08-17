var express = require('express');
var router = express.Router();

/* GET register page. */
router.get('/', (req,res)=>{
    res.render('register.ejs')
})

module.exports = router;
