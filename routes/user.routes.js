const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const uploadController = require("../controllers/upload.controller");
const multer = require("multer");
const upload = multer();

//auth
router.post("/register", authController.signUp); //post
router.post("/login", authController.signIn);
router.post("/logout", authController.logout);

// user display: 'block',
router.get("/", userController.getAllUsers); //find every users
router.get("/:id", userController.userInfo); //find one user
router.put("/:id", userController.updateUser); // update info
router.delete("/:id", userController.deleteUser); // delete user
router.patch("/follow/:id", userController.follow);
router.patch("/unfollow/:id", userController.unfollow);

//upload
router.post("/upload", upload.single("file"), uploadController.uploadProfil);

module.exports = router;
