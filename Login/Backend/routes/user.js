const express = require("express");
const router = express.Router();

const { doPost, doPostt, doGet } = require("../controllers/update");

router.route("/update").post(doPostt); //signup
router.route("/users").get(doGet);
router.route("/login").post(doPost); //login

module.exports = router;