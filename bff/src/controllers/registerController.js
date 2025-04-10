const registerUseCase = require('../usecases/registerUseCase');

const registerController = {
  post: (req, res) => {
    registerUseCase.validateCase(req, res);
  }
}

module.exports = registerController;