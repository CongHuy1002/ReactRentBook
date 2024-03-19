const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'images') {
<<<<<<< HEAD
      cb(null, '../FE/src/assets/public/images');
    } else if (file.fieldname === 'pdfFile') {
      cb(null, '../FE/src/assets/public/Pdf');
=======
      cb(null, 'src/public/images');
    } else if (file.fieldname === 'pdfFile') {
      cb(null, 'src/public/PDF');
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
    } else {
      cb(new Error('Invalid fieldname'));
    }
  },
  filename: (req, file, cb) => {
<<<<<<< HEAD
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
  }
})
=======
    cb(
      null,
      new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname,
    );
  },
});
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
const fileFilter = (req, file, cb) => {
  const allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg'];
  const allowedPDFTypes = ['application/pdf'];

<<<<<<< HEAD
  if (file.fieldname === 'images' && allowedImageTypes.includes(file.mimetype)) {
    cb(null, true);
  } else if (file.fieldname === 'pdfFile' && allowedPDFTypes.includes(file.mimetype)) {
=======
  if (
    file.fieldname === 'images' &&
    allowedImageTypes.includes(file.mimetype)
  ) {
    cb(null, true);
  } else if (
    file.fieldname === 'pdfFile' &&
    allowedPDFTypes.includes(file.mimetype)
  ) {
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });
const siteController = require('../app/controllers/siteController');
const verifyController = require('../app/middlewares/verifyController');
<<<<<<< HEAD
<<<<<<< Updated upstream
router.get('/', verifyController.verifyToken, verifyController.verifyAdmin, siteController.index);
router.get('/createForm', verifyController.verifyToken, verifyController.verifyAdmin, siteController.createFormBook);
router.get('/loginForm', siteController.createFormLogin);
router.get('/registerForm', siteController.createFormRegister);
router.post('/postbook', upload.fields([{ name: 'images', maxCount: 5 }, { name: 'pdfFile', maxCount: 1 }]), siteController.postBook);
=======
router.get('/', siteController.index);
=======
router.get('/', siteController.index);
// router.get(
//   '/createForm',
//   // verifyController.verifyToken,
//   // verifyController.verifyAdmin,
//   siteController.createFormBook,
// );
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
router.post(
  '/postbook',
  upload.fields([
    { name: 'images', maxCount: 5 },
    { name: 'pdfFile', maxCount: 1 },
  ]),
  siteController.postBook,
);
<<<<<<< HEAD
>>>>>>> Stashed changes
router.get('/details/:slug', siteController.detailsBook);
router.delete('/:id', siteController.deleteBook);
router.get('/mybook', verifyController.verifyToken, siteController.myBook);
router.post('/postLinkBook', verifyController.verifyToken, siteController.postLinkBook); //* sau khi thanh toán sẽ đc post qua route này
router.get('/readbook/:id/:token', verifyController.verifyToken, siteController.readMyBook);
=======
router.get('/details/:slug', siteController.detailsBook);
router.delete('/:id', siteController.deleteBook);
router.get('/search', siteController.searchBook);
router.get('/mybook', siteController.myBook);
router.post(
  '/postLinkBook',
  verifyController.verifyToken,
  siteController.postLinkBook,
); //* sau khi thanh toán sẽ đc post qua route này
router.get(
  '/readbook/:id/:token',
  verifyController.verifyToken,
  siteController.readMyBook,
);
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81

//*chart
router.get('/chart', siteController.getChart);
module.exports = router;
