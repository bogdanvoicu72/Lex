var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET avocatView page. */
router.get('/', (req,res)=>{
    res.render('AvocatView.ejs');
})



module.exports = router;
