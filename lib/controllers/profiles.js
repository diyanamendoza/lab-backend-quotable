const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router()
  .get('/', async (req, res) => {
    const response = 'Hi there. I am working.'
    res.send(response)
})

  .post('/', async (req, res, next) => {
      const profile = await ProfileService.create({name: req.body.name})
      res.send(profile)
  });
