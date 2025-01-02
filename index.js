const express = require("express");
const app = express();

// Modulo Handlebars
const handlebars = require('express-handlebars');

// adicionar css
app.use('/css', express.static('./css'));

// modulo Body-parser
    const bodyparser =require('body-parser');
const bodyParser = require("body-parser");

// rota para recibir datos del formulario al mysql
const Post = require('./models/Post');
const { where } = require("sequelize");

//Config 
    // template Engine 
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

// Body-parser config
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

app.get('/', function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then(function (posts){
        res.render('home',{posts: posts})
    })
})


//Rota 
app.get('/cad', function(req,res){
    res.render('formulario')
});

// Rota de tipo post
app.post('/add', function(req,res){
    Post.create({
        titulo: req.body.Titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('Huvo un erro '+erro)
    })
})

//Rotas de deletar 
app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send('Postagem deletado com sucesso')
    }).catch(function(erro){
        res.send('esta postagem não existe')
    })
})


//servidor
app.listen(8081, function(){
    console.log("Servidor rodando na URL http://localhost:8081!");
});