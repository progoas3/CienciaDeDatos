const express = require('express')
const routes = express.Router()
var cors = require('cors')

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

//rutas

routes.get('/:numero_accion', cors(corsOptions), (req, res)=>{
    req.getConnection((err, conn)=> {
        if(err) return res.send(err)

        conn.query('SELECT * FROM seguimiento where numero_accion = ?',[req.params.numero_accion], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
} )

routes.get('/', cors(corsOptions), (req, res)=>{
    req.getConnection((err, conn)=> {
        if(err) return res.send(err)

        conn.query('SELECT * FROM seguimiento', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
} )



routes.post('/',cors(corsOptions),(req, res)=>{
    req.getConnection((err, conn)=> {
        if(err) return res.send(err)

        conn.query('INSERT INTO seguimiento set ?',[req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('seguimiento insert')
        })
    })
} )

routes.delete('/:numero_accion',cors(corsOptions),   (req, res)=>{
    req.getConnection((err, conn)=> {
        if(err) return res.send(err)

        conn.query('DELETE FROM seguimiento WHERE numero_accion = ?', [req.params.numero_accion], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Eliminado')
        })
    })
} )

routes.put('/:numero_accion',cors(corsOptions),  (req, res)=>{
    req.getConnection((err, conn)=> {
        if(err) return res.send(err)

        conn.query('UPDATE seguimiento set ? WHERE numero_accion = ?', [req.body, req.params.numero_accion], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Modificado')
        })
    })
} )
module.exports = routes

