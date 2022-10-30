const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/checkAuth');
const UserController = require('../controllers/user-controller');
const { upload } = require('../middlewares/S3Upload');


router.get('/connected-user', UserController.getConnectedUser)
router.get('/', UserController.getUser);
router.patch('/', checkAuth, UserController.updateUser);
router.patch('/updatepassword', checkAuth, UserController.updatePassword);
router.post('/login', UserController.login);
router.patch('/updateprofileimg', checkAuth, upload.single('profileimage'), UserController.updateProfileImg);
router.patch('/updatebgimage', checkAuth, upload.single('bgimage'), UserController.updateBackgroundImg);
router.patch('/deleteimage', checkAuth, UserController.deleteImage);
router.patch('/uploadimage', checkAuth, upload.single('imagesofprofile'), UserController.updloadImages);
router.patch('/upload-cv', checkAuth, upload.single('cvfile'), UserController.uploadCv);
router.patch('/addskill', upload.single('skillicon'), checkAuth, UserController.addSkill);
router.delete('/deleteskill/:id', checkAuth, UserController.deleteSkill)
router.patch('/postnews', checkAuth, UserController.postNews);
router.patch('/changenews', checkAuth, UserController.updateNews);

module.exports = router;