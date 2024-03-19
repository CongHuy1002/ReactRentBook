const jwt = require('jsonwebtoken');

class VerifyController {
  verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
<<<<<<< HEAD
=======
    console.log(req.cookies.accessToken);
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
    console.log(token);
    if (token) {
      // const accessToken = token.split(' ')[1];
      jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, user) => {
        if (err) {
          console.log(err);
          res.status(403).json('Token is not valid');
        } else {
          req.user = user;
          next();
        }
      });
    } else {
<<<<<<< HEAD
      res.redirect('/loginform')
=======
      res.status(500).json('Login again');
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
    }
  };

  verifyAdmin = (req, res, next) => {
    this.verifyToken(req, res, () => {
      if (req.user.admin) {
<<<<<<< HEAD
        res.redirect('/admin/stored/order')
=======
        res.redirect('/admin/stored/order');
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
      } else {
        next();
      }
    });
  };
}

module.exports = new VerifyController();
