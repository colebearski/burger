// dependants
var express = require("express");
var burger = require("../models/burger.js");

// create router/ start router
var router = express.Router();

// routes
// select all burgers
router.get("/index", function (req, res) {
	burger.selectAll(function (data) {

		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

// create/post a burger
router.post("/burger/create", function (req, res) {
	burger.insertOne(req.body.burger_name, function() {
		res.redirect("/index");
	});
});

// devour a burger because we be hungry
router.post("/burger/eat/:id", function (req, res) {
	burger.updateOne(req.params.id, function() {
		res.redirect("/index");
	});
});

// export
module.exports = router;

