const router = require('express').Router();
const template = require('../templates/home');
const projects = require('../projects');

router.get('/', function (req, res) {
	res.marko(template, {
		title: 'Jeff Lowy'
	});
});

router.get('/contact', function (req, res) {
	res.marko(template, {
		title: 'Contact Me'
	});
});

router.get('/portfolio/:proj', function (req, res) {
	var proj = req.params.proj;
	res.marko(projects[proj]);
});

module.exports = router;