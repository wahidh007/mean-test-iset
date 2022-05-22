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
    .catch((err) => {
      console.log('Etudiant non trouvé !')
      res.status(400).send('Etudiant non trouvé !')
    })
})

route.post('/', (req, res) => {
  Etudiant.create({"nom": req.body.nom, "email": req.body.email, "dateNais": req.body.dateNais})
    .then((newEtudiant) => {
      res.status(201).json(newEtudiant)
    })
})

route.put('/:id', (req, res) => {
  // res.status(200).json('put')
  Etudiant.updateOne({_id: req.params.id},{nom: req.body.nom , email: req.body.email, dateNais: req.body.dateNais})
    .then((mess) => {
      console.log(mess)
      res.status(200).json(mess)
    })
    .catch(() => {
      console.log('Not found')
      res.status(404).json('Not found !')
    })
})

route.delete('/:id', (req, res) => {
  // res.status(200).json('delete')
  Etudiant.deleteOne({_id: req.params.id})
    .then((mess) => {
      console.log(mess)
      res.status(200).json(mess)
    })
    .catch(() => {
      console.log('Not found')
      res.status(404).json('Not found !')
    })
})

module.exports = route
