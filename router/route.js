const express = require("express");
const { Signup, Login } = require("../controller/user.controller");

const router = express.Router();

router.post("/login", Login);

router.post("/signup", Signup);


router.get("/login", (req, res) => {
    res.render("login");
  });

router.get("/signup", (req, res) => {
  res.render("signup");
});




module.exports = router;
