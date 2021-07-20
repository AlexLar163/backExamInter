const express = require('express');
const connectionMysql = require('../connectionMysql')
const router = express.Router()

router.post('/register', (req, res) => {
  console.info('Register ON')
  let body = req.body
  let query = `INSERT INTO tbl_worker (name, url_photografy, email, charge, birthday_date, sueldo, password)  VALUES (
    '${body.name}',
    '${body.url_photography}',
    '${body.email}',
    '${body.charge}',
    '${body.birthday_date}',
    '${body.sueldo}',
    '${body.password}'
    );`
  connectionMysql.query(query, (err, rows) => {
    if (err) {
      console.error('Error query: ', err)
      res.status(500).json({ message: 'Error al registrarse' });
    } else {
      console.info('Inserted successfully.')
      res.redirect(301,'http://localhost:4200/login')
      // res.status(200).json({ message: 'Exito al registrarse' });
    }
  })
})


module.exports = router
