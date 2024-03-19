const express = require('express');
var cors = require('cors');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
require('dotenv').config();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');
const multer = require('multer');
const upload = multer({ dest: '' });
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const port = 5000;
<<<<<<< HEAD
app.use(cors());
=======
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
app.use(morgan('combined'));
const route = require('./Routes/index');
const db = require('./config/db');
db.connect();
//* Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(require('handlebars')),
    helpers: {
      sum: (a, b) => a + b,
    },
<<<<<<< HEAD
  })
=======
  }),
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'Resources/views'));
app.use('/src/public/', express.static(path.join(__dirname, 'public/')));
app.use(
  '/src/public/images',
<<<<<<< HEAD
  express.static(path.join(__dirname, 'public/images'))
=======
  express.static(path.join(__dirname, 'public/images')),
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
);
app.use('/src/public/PDF', express.static(path.join(__dirname, 'public/PDF')));
app.use(
  express.urlencoded({
    extended: true,
<<<<<<< HEAD
  })
=======
  }),
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
);
app.use(cookieParser());
app.use(express.json());
app.use(methodOverride('_method'));
//*Route init
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
