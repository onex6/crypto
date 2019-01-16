var express= require('express');
var app=express();
const http = require('http');
var logger= require('morgan');
var bodyParser = require('body-parser');


	app.get('/', function(req,res){
		res.render('home.ejs')
	});

	app.get('/faq', function(req,res){
		res.render('faq')

	});

//log requests
app.use(logger('dev'));

//give server access to users imputs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




// Template engine
app.set('view engine', 'ejs');

//fichiers statiques
app.use(express.static('./public'));



//port d'écoute
const server = http.createServer(app);

const ports = process.env.PORT || 3000;
server.listen(ports, () =>{
  console.log('serveur démarré sur le port ' + ports);
});