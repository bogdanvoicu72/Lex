var express = require('express');
var router = express.Router();
var axios = require('axios');
const cookieParser = require('cookie-parser');

/* GET user_page page. */
router.get('/', (req,res)=>{
    res.render('user_page.ejs');
})

router.post('/', (req,res)=>{
    axios.post('http://localhost:7000/User-info',{
        email: req.cookies['email']
     
    }).then((response)=>{
        if(response.status == 200){
            console.log(response.data);
            let infoPers = response.data;
            let infoNume = infoPers[0];
            let infoPrenume = infoPers[1];
            let infoEmail = infoPers[2];
            let infoSerieCI = infoPers[3];
            let infoNumarCI = infoPers[4];
            let infoOras = infoPers[5];
            let infoStrada = infoPers[6];
            let infoNumar = infoPers[7];
            let infoScara = infoPers[8];
            let infoApartament = infoPers[9];
            let infoJudet = infoPers[10];
            res.render('Wizard.ejs',{Nume:infoNume,Prenume:infoPrenume, Email:infoEmail, SerieCI:infoSerieCI, NumarCI:infoNumarCI, Oras:infoOras, Strada:infoStrada,
                       Numar:infoNumar, Scara:infoScara, Apartament:infoApartament, Judet:infoJudet });
        }
        else 
        {
            res.send("Nu am gasit nici un utilizator");
        }
    });
})

module.exports = router;
