const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const routeEtudiant = require('./routes/etudiant.route')

const app = express()

app.use(express.json())

app.use('/api/etudiant', routeEtudiant)

app.use(express.static(path.join(__dirname, 'www')))

app.listen(3010, () => {
  console.log('Server listening on port 3010...')
})
