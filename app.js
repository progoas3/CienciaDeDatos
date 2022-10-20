const express = require('express')
const mysql  = require('mysql')
const myconn = require('express-myconnection')
var cors = require('cors')

const routes = require('./routes')




const app = express()
app.set('port', process.env.PORT || 3000)


const dbOptions = {
    host: 'sql10.freemysqlhosting.net',
    port: 3306,
    user: 'sql10527072',
    password: '8e1QkGTruM',
    database: 'sql10527072'
}
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))
 
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

//rutas
app.get('/', (req, res)=>{
    res.send('Welcome')
})

app.use('/seguimiento', routes)


app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})