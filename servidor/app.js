const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

//CONEXIÓN A BASE DE DATOS -- LIBRERÍA MOONGOSE
const mongoose = require('mongoose');
const uri = 'mongodb+srv://Sefatecol:dbsefatecol@cluster0.dpfrk.mongodb.net/Sefatecol?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true}; //CAMBIAR useCreateIndex: true POR useUnifiedTopology: true

mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to
   mongoose instance. */
    () => { console.log('Conectado a base de datos') },
    /** handle initial connection error */
    err => { console.log(err) }
   );

//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//RUTAS DE PRUEBA PARA VER SI FUNCIONA SERVIDOR
//app.get('/', function (req, res) {
//    res.send('Hola Mundo');
//});

app.use(cors());

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//RUTA
app.use('/api', require('./routes/registro'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//PUERTO ESTÁTICO
//app.listen(3000, function () {
//    console.log('El servidor escucha por el puerto 3000');
//});

//PUERTO AUTOMÁTICO
app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port '+ app.get('puerto'));
});