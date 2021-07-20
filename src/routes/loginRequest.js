const express = require('express');
const connectionMysql = require('../connectionMysql')
const router = express.Router()


// router.put('/login/:name/:password', (req, res) => {
router.post('/login', (req, res) => {
  let body = req.body
  let url = `SELECT * from tbl_worker where name='${body.name}';`
  connectionMysql.query(
    url,
    (err, rows) => {
      if (err) {
        console.log('Error, query login,\n Error: ', err)
        res.status(500).json({ message: 'Error, con la consulta.' });
      } else {
        (rows.length >= 1)
          ? rows.map((item, index) => {
            if (item.name === body.name && item.password === body.password) {
              // res.status(200).json(item)
              res.redirect(301, `http://localhost:4200/home`)
            } else {
              (rows.length === (index + 1)) && res.status(400).json({ message: 'Error, revisar credenciales.' })
            }
          })
          : res.status(400).json({ message: 'Error, revisar credenciales.' })
      }
    })
})

module.exports = router
