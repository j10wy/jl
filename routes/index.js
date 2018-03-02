const router = require('express').Router();
const home = require('../pages/home');
const about = require('../pages/about');
const contact = require('../pages/contact');
const projects = require('../projects');

router.get('/', function (req, res) {
	res.marko(home, {
		title: 'Jeff Lowy'
	});
});

router.get('/about', function (req, res) {
	res.marko(about, {
		title: 'About Me'
	});
});

router.get('/contact', function (req, res) {
	res.marko(contact, {
		title: 'Contact Me'
	});
});

router.get('/portfolio/:proj', function (req, res) {
	var proj = req.params.proj;
	res.marko(projects[proj]);
});

module.exports = router;