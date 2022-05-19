const express = require('express')
const route = express.Router()
const Etudiant = require('../models/etudiant.model')

route.get('/', (req, res) => {
  Etudiant.find()
    .then((etudiants) => {
      res.status(200).json(etudiants)
    })
})

route.get('/:id', (req, res) => {
  Etudiant.findById(req.params.id)
    .then((etudiant) => {
      res.status(200).json(etudiant)
    })
})

route.post('/', (req, res) => {
  Etudiant.create({"nom": req.body.nom, "email": req.body.email, "dateNais": req.body.dateNais})
    .then((newEtudiant) => {
      res.status(201).json(newEtudiant)
    })
})

route.put('/:id', (req, res) => {
  res.status(200).json('put')
})

route.delete('/:id', (req, res) => {
  res.status(200).json('delete')
})

module.exports = route
