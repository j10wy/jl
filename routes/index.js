const router = require('express').Router();
const template = require('../templates/main');
const projects = require('../projects');

router.get('/', function (req, res) {
	res.marko(template, {
		name: 'Jeff',
		colors: ['red', 'green', 'blue']
	});
});

router.get('/portfolio/:proj', function (req, res) {
	var proj = req.params.proj;
	res.marko(projects[proj]);
});

module.exports = router;