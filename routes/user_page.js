var express = require('express');
var router = express.Router();

/* GET user_page page. */
router.get('/', (req,res)=>{
    res.render('user_page.ejs');
})

module.exports = router;
