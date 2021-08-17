var express = require('express');
var router = express.Router();

/* GET wizard page. */
router.get('/', (req,res)=>{
    res.render('wizard.ejs');
})

module.exports = router;
