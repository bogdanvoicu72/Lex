var express = require('express');
var router = express.Router();

/* GET cerere page. */
router.get('/', (req,res)=>{
    res.render('cerere.ejs');
})

module.exports = router;
