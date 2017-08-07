const router = require("express").Router();
var template = require('../templates/main');

router.get('/', function (req, res) {
	res.marko(template, {
		name: "Jeff",
		colors: ['red', 'green', 'blue']
	});
});

module.exports = router;