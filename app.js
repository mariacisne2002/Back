const app = require('./src/index');
var cors = require('cors');
const db = require('./src/database/database')

                        /*CONSULTAS POR EL MOMENTO*/
                        /*INQUILINOS*/
//LISTADO DE CLIENTE
app.get('/api/cliente', (req,res)=>{
    db.query('SELECT idcliente, nombre1, nombre2, apellido1, apellido2 FROM cliente', (err, data)=>{
        if(err){
            console.log(err);
            return err
        }
        res.json({mensaje: 'Resultados', data})
    })
})

//VER LA INFO DE UN CLIENTE
app.get('/api/cliente/:id', (req,res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    const sql = "SELECT nombre1, nombre2, apellido1, apellido2, telefono, canitdad, dpi, apartamento_idapartamento FROM cliente WHERE idcliente = ?"
    db.query(sql, [id], (err, data)=>{
        if(err){
            console.log(err);
            return err
        }
        res.json({mensaje: 'Resultado', data})
    })
})

//CREAR UN NUEVO CLIENTE
app.post('/api/cliente', (req, res)=> {
    console.log(Object.values(req.body));
    const values = Object.values(req.body);
    const sql = "INSERT INTO cliente (idcliente, nombre1, nombre2, apellido1, apellido2, telefono, canitdad, dpi, apartamento_idapartamento) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(sql, values, (err,data)=>{
        if(err){
        console.log(err);
        return err
    }
    res.json({mensaje: 'Cliente creado', data})
    })
})

//ELIMINAR UN CLIENTE
app.delete('/api/cliente/:id', (req,res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    const sql = "DELETE FROM cliente WHERE idcliente = ?"
    db.query(sql, [id], (err, data)=>{
        if(err){
            console.log(err);
            return err
        }
        res.json({mensaje: 'Resultado', data})
    })
})

//ACTUALIZAR UN CLIENTE
app.put('/api/cliente/:id', (req, res) => {
    console.log(Object.values(req.body));
    const values = Object.values(req.body);
    const sql = "UPDATE cliente SET  nombre1=?, nombre2=?, apellido1=?, apellido2=?, telefono=?, canitdad=?, dpi=?, apartamento_idapartamento=? WHERE idcliente = ?"
    db.query(sql, values, (err, result) => {
        if(err){
            console.log(err);
            return err
        }
        res.json({mensaje: 'Cliente actualizado', result})
    })
})


                                /*CONTROL DE PAGO*/
//LISTADO DE APARTAMENTOS
app.get('/api/apartamento', (req,res)=>{
    db.query('SELECT * FROM apartamento', (err, data)=>{
        if(err){
            console.log(err);
            return err
        }
        res.json({mensaje: 'Resultados', data})
    })
})

//VER LA INFO DE UN APARRAMENTOS
app.get('/api/apartamento/:id', (req,res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    const sql = "SELECT cliente.idcliente, cliente.nombre1, cliente.nombre2, cliente.apellido1, cliente.apellido2, cliente.dpi, apartamento.nombre FROM cliente INNER JOIN apartamento INNER JOIN pago ON apartamento.idapartamento = pago.apartamento_idapartamento ON cliente.apartamento_idapartamento = apartamento.idapartamento WHERE apartamento.idapartamento = ?"
    db.query(sql, [id], (err, data)=>{
        if(err){
            console.log(err);
            return err
        }
        res.json({mensaje: 'Resultado', data})
    })
})

//CREAR UN NUEVO CLIENTE
/* app.post('/api/apartamento', (req, res)=> {
    console.log(Object.values(req.body));
    const values = Object.values(req.body);
    const sql = "INSERT INTO cliente (idcliente, nombre1, nombre2, apellido1, apellido2, telefono, canitdad, dpi, apartamento_idapartamento) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(sql, values, (err,data)=>{
        if(err){
        console.log(err);
        return err
    }
    res.json({mensaje: 'Cliente creado', data})
    })
}) */

//ELIMINAR UN CLIENTE
app.delete('/api/apartamento/:id', (req,res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    const sql = "DELETE FROM apartamento WHERE idcliente = ?"
    db.query(sql, [id], (err, data)=>{
        if(err){
            console.log(err);
            return err
        }
        res.json({mensaje: 'Resultado', data})
    })
})

//ACTUALIZAR UN CLIENTE
app.put('/api/apartamento/:id', (req, res) => {
    console.log(Object.values(req.body));
    const values = Object.values(req.body);
    const sql = "UPDATE cliente SET  nombre1=?, nombre2=?, apellido1=?, apellido2=?, telefono=?, canitdad=?, dpi=?, apartamento_idapartamento=? WHERE idcliente = ?"
    db.query(sql, values, (err, result) => {
        if(err){
            console.log(err);
            return err
        }
        res.json({mensaje: 'Cliente actualizado', result})
    })
})








/*CONFIGURACIÓN DEL PUERTO*/
app.listen(app.get('port'), (error) => {
    if(error){
        console.log(`Internal error ${error}`)
    }else{
        console.log(`Listen and serve on port: ${app.get('port')}`)
    }
}) 