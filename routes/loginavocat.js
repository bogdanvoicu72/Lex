var express = require('express');
var router = express.Router();
const axios = require('axios');
const cookieParser = require('cookie-parser');


/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('loginavocat.ejs');
});


router.post('/',(req,res)=>{
  axios.post('http://localhost:7000/Login-Avocat',{
      email:req.body.email,
      password: req.body.password
  }).then((response)=>{
      if(response.status == 200){
          res.cookie('id',response.data.id, { maxAge: 900000, httpOnly: true });
          res.cookie('email',response.data.email, { maxAge: 900000, httpOnly: true });
          console.log(response.data);
          res.redirect('Avocat');
      }
      else 
      {
          res.redirect('Avocat-Login');
      }
  });
});

module.exports = router;
