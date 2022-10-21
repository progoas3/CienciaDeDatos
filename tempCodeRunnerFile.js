routes.post('/',cors(corsOptions),(req, res)=>{
    req.getConnection((err, conn)=> {
        if(err) return res.send(err)
        conn.query('INSERT INTO seguimiento set ?',[req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('seguimiento insert')
        })
    })
} )
