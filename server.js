const express = require('express')

const app = express()

app.use(express.static('dist'))

app.listen(8080, () => {
  console.log(`localhost:8080`)
})
