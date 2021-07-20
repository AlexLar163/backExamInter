const mysql = require('mysql2')
const connectionMysql = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'alexander12321',
  database: 'bd_exam_inter',
  multipleStatements: true,
})

connectionMysql.connect(
  (err) => (err)
    ? console.error(`Error to connect Database, Error: ${err}`)
    : console.info(`Connection successfully established`))

module.exports = connectionMysql