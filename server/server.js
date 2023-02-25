// Basicos del servidor
const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

// Iniciar server

app.listen(PORT, () => {
    console.log('Server run at port ' + PORT)
})

// Configuracion para peticiones cruzadas y lectura de POST
app.use(cors({
    origin:'http://localhost:5173'
}));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Configuracion de mongoose

require('./config/mongoose.config')


// Rutas

const ServiceRoutes = require('./routes/service.routes');
ServiceRoutes(app);

const UserRoutes = require('./routes/user.routes');
UserRoutes(app);

// test

const fecha = new Date();
const dia = fecha.getDate();
const mes = () => {
  const conversor = fecha.getMonth();
  switch(conversor){
    case 1:
      return 'Febrero';
      break;
    case 2:
      return 'Marzo'
    }
}; 
const anio = fecha.getFullYear()

const horalocal = fecha.getHours()

const minutos = fecha.getMinutes()


console.log(`La fecha de hoy es ${dia}/${mes()}/${anio} y son las ${horalocal}:${minutos}`)


