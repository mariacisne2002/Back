const mysql = require('mysql');
const myConnection = require('express-myconnection');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apartamentos_bd'
})

conexion.connect((error)=>{
    if(error){
        console.log(`El error de conexion es: ${error}`);
    }
    console.log('Conectado a la Base de Datos');
})

module.exports = conexion;