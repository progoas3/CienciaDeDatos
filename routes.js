const express = require('express')
const routes = express.Router()

//rutas

routes.get('/:numero_accion', cors(), (req, res)=>{
    req.getConnection((err, conn)=> {
        if(err) return res.send(err)

        conn.query('SELECT * FROM seguimiento where numero_accion = ?',[req.params.numero_accion], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
} )

routes.get('/', cors(), (req, res)=>{
    req.getConnection((err, conn)=> {
        if(err) return res.send(err)

        conn.query('SELECT * FROM seguimiento', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
} )



routes.post('/', cors(),(req, res)=>{
    req.getConnection((err, conn)=> {
        if(err) return res.send(err)

        conn.query('INSERT INTO seguimiento set ?',[req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('seguimiento insert')
        })
    })
} )

routes.delete('/:numero_accion', cors(),  (req, res)=>{
    req.getConnection((err, conn)=> {
        if(err) return res.send(err)

        conn.query('DELETE FROM seguimiento WHERE numero_accion = ?', [req.params.numero_accion], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Eliminado')
        })
    })
} )

routes.put('/:numero_accion', cors(), (req, res)=>{
    req.getConnection((err, conn)=> {
        if(err) return res.send(err)

        conn.query('UPDATE seguimiento set ? WHERE numero_accion = ?', [req.body, req.params.numero_accion], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Modificado')
        })
    })
} )
module.exports = routes

