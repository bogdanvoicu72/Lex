var express = require('express');
var router = express.Router();
var axios = require('axios');
const cookieParser = require('cookie-parser');

/* GET wizard page. */
router.get('/', (req,res)=>{
    res.render('wizard.ejs');
})

router.get('/', (req,res)=>{
    axios.get('http://localhost:7000/Get-users',{
     
    }).then((response)=>{
        if(response.status == 200){
            console.log(response.data);
            res.redirect('Wizard');
        }
        else 
        {
            res.send("Nu am gasit nici un utilizator");
        }
    });

})

module.exports = router;
