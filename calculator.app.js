const express = require('express')

const startApp = async () => {
  return new Promise((resolve, reject) => {
    const port = process.env.PORT
    const app = express()

    app.get('/', (req, res) => {
      res.json({ message: 'Hello from calculator' })
    })

    const server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
      resolve({ app, server })
    })
  })
}

module.exports = {
  startApp
}
