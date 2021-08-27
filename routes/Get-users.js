var express = require('express');
var router = express.Router();
var axios = require('axios');



router.get('/',(req,res)=>{
    axios.get('http://localhost:7000/Get-users',{
     
  }).then((response)=>{
      if(response.status == 200){
          console.log(response.data);
          res.redirect('Avocat');
      }
      else 
      {
          res.send("Nu am gasit nici un utilizator");
      }
  });
})

module.exports = router;
