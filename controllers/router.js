var express= require('express');
var app=express();


	app.get('/', function(req,res){
		res.render('header.ejs')
	});



	app.get('/faq', function(req,res){
		res.render('faq')

	});
module.exports