var express= require('express');
var app=express();
var cryptocontroller=require('./controllers/cryptocontroller');




// Template engine
app.set('view engine', 'ejs');

//fichiers statiques
app.use(express.static('./public'));

//les controllers
cryptocontroller(app);


//port d'écoute
app.listen(3000);
console.log('serveur démarré sur le port 3000');