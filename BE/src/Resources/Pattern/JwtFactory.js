const jwt = require('jsonwebtoken');

class JwtFactory {
  static createToken(payload, secret, expiresIn) {
    return jwt.sign(payload, secret, { expiresIn });
  }
}

module.exports = JwtFactory;