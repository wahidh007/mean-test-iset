const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
  res.status(200).json('get')
})

route.get('/:id', (req, res) => {
  res.status(200).json('get id')
})

route.post('/', (req, res) => {
  res.status(201).json('post')
})

route.put('/:id', (req, res) => {
  res.status(200).json('put')
})

route.delete('/:id', (req, res) => {
  res.status(200).json('delete')
})

module.exports = route
