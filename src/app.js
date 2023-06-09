const express = require('express')
const path= require('path') 
const morgan = require('morgan')
const mysql = require('mysql')
const myConnection = require('express-myconnection')
require('dotenv').config()

const app = express()

const customerRoutes = require('./routes/customer')
const { urlencoded } = require('express')

//settings
app.set('port', process.env.PORT ||3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//middlewares
app.use(morgan('dev'))
app.use(myConnection(mysql, {
    host:'localhost',
    user: 'root',
    password: process.env.DB_PASS,
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'))
//single es la manera en la que me conecto al servidor
app.use(express.urlencoded({extended: false}))

//routes
app.use('/', customerRoutes)


//static
app.use(express.static(path.join(__dirname, 'public')))

//server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
})