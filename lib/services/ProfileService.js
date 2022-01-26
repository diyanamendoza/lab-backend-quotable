const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    const data = await res.json()
    const { quote } = data[0]

    return Profile.insert({ name: name, quote: quote})
  } 
};
