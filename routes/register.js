var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET register page. */
router.get('/', (req,res)=>{
    res.render('register.ejs')
})



router.post('/', (req,res) =>{
    axios.post('https://api-lex-xrlwd.ondigitalocean.app/Register',{
        nume:req.body.nume,
        prenume:req.body.prenume,
        email:req.body.email,
        password:req.body.password,
        password2:req.body.password2,
        CNP:req.body.CNP,
        SerieCI: req.body.SerieCI,
        NumarCI:req.body.NumarCI,
        Oras:req.body.Oras,
        Strada:req.body.Strada,
        Numar:req.body.Numar,
        Scara:req.body.Scara,
        Bloc:req.body.Bloc,
        Apartament:req.body.Apartament,
        Judet:req.body.Judet
    }).then((response)=>{
           console.log(response);
           if(response.status == 200){
           res.redirect('Login');
           };
       })
      
    });
   

module.exports = router;
