const db = require('../database/db')

const Signup = (req, res) => {
  db.query(
    `INSERT INTO user (fname, lname,email,password) values("${req.body.fname}", "${req.body.lname}","${req.body.email}","${req.body.password}") `
  );
  res.redirect('/login');
};


const Login = (req, res) => {
  db.query(
    `SELECT * FROM user WHERE email="${req.body.email}" AND password="${req.body.password}"`,(err,result)=>{
     res.status(200).render("home", { user: `${result[0].lname}` });
    }
  );
};

module.exports = {
  Signup,
  Login,
};
