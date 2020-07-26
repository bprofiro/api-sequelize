const User = require('../model/User');

module.exports = {
  async index(request, response) {
    const user = await User.findAll();

    return response.json(user);
  },

  async store(request, response) {
    const { name, email, age } = request.body;

    const user = await User.create({ name, email, age });

    return response.json(user);
  }
}