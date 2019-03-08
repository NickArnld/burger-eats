var express = require("express");
var burger = require("../models/burgers");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.all((data)=>{
        hbsObj = {
            burgers: data
        };
        res.render("index", hbsObj);
    })
})

router.post("/api/burgers", (req, res) => {
    burger.insert(req.body.burger_name, (result)=>{
        res.json(result);
    });
})

module.exports = router;