const express = require('express')
const cors = require('cors')
const app = new express()


//Port
app.set('port', process.env.PORT || 3003)

//Middlewares
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}));

//Routes
app.use(require('./routes/registerRequest'))
app.use(require('./routes/loginRequest'))
app.use(require('./routes/listWorkersRequest'))

app.all('/', (req, res, next) => {
  return res.status(200).json({message: 'Servidor listo'})
});


app.listen(app.get('port'), () => console.log(`Server Run on port ${app.get('port')}`))
