const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const routeEtudiant = require('./routes/etudiant.route')

const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://wahid:88ciKvnaGvM4HdHa@cluster0.rpxl2.mongodb.net/EtudiantsDatabase?retryWrites=true&w=majority')
  .then(() => {
    console.log('database connected !')
  })
  .catch(() => {
    console.log('Problème de connection !')
  })

app.use('/api/etudiant', routeEtudiant)

app.use(express.static(path.join(__dirname, 'www')))

app.listen(3010, () => {
  console.log('Server listening on port 3010...')
})
