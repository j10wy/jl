const router = require('express').Router();
const template = require('../pages/home');
const about = require('../pages/about');
const projects = require('../projects');

router.get('/', function (req, res) {
	res.marko(template, {
		title: 'Jeff Lowy'
	});
});

router.get('/about', function (req, res) {
	res.marko(about, {
		title: 'About Me'
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