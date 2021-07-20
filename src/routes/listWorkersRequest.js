const express = require('express');
const connectionMysql = require('../connectionMysql')
const router = express.Router()

router.get('/list', (req, res) => {
  let query = `SELECT id, name, url_photografy, email, charge, birthday_date, sueldo FROM tbl_worker;`
  connectionMysql.query(query, (err, rows) => {
    if (err) {
      console.log('Error al consultar lista de trabajadores')
    } else {
      // console.log(rows)
      res.status(200).json(rows)
    }
  })

})


module.exports = router
