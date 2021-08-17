var express = require('express');
var router = express.Router();

/* GET avocatView page. */
router.get('/', (req,res)=>{
    res.render('AvocatView.ejs');
})

module.exports = router;
