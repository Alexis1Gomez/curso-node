const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '123456789', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Conectado con suceso")
}).catch(function(){
    console.log("Falla al conectar" + erro)
});