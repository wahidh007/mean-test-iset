const express = require('express')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
const routeEtudiant = require('./routes/etudiant.route')

const app = express()

app.use(cors())
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

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})
