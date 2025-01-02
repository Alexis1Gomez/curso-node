//modulo Sequelize 
const Sequelize = require('sequelize');
//coneccion con bando de datos mysql
const sequelize = new Sequelize('postapp', 'root', '123456789', {
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true}
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}