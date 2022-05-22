const mongoose = require('mongoose')

const etudiantSchema = mongoose.Schema({
  nom: {type: String, required: true},
  email: {type: String, required: true},
  dateNais: {type: Date, required: true},
})

module.exports = mongoose.model('Etudiant', etudiantSchema)
