const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello world!')
})

const port = 6060
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  console.log('Press Ctrl+C to quit.')
})
