const express = require("express");
const router = express.Router();
const db = require("../controller/db");
const routeFunctions = require("./routeFunctions")
const isLoggedIn = routeFunctions.isLoggedIn;

router.get("/pregame", isLoggedIn, (req, res, next) => {
    res.render("pages/pregame", { title: "pregame" });
});

router.post("/questionaire", isLoggedIn, (req, res, next) => {

    return db.pool.query(`INSERT INTO quiz_data (firstName, lastName, email, password) 
    VALUES ("${req.body.firstName}", "${req.body.lastName}", "${req.body.email}", "${req.body.password}")`, (err, result) => {
        if (err) throw err;
        else res.render("pages/postgame");
    });
});


//router.post("/questionaire", (req, res, next) => {
//    //get the appropriate id - this is a test, will need to be deleted later
//    let userId = db.pool.query(`SELECT userId FROM user_data WHERE userId = 1`)
//    console.log(userId)

//});

module.exports = router;
