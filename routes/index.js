var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.pug', { title: 'Express' });
});

/* GET About us page. */
router.get('/about', function(req, res, next) {
  res.render('about.pug', { title: 'Express' });
});


/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects.pug', { title: 'Express' });
});

/* GET Service page. */
router.get('/services', function(req, res, next) {
  res.render('service.pug', { title: 'Express' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact.pug', { title: 'Express' });
});






module.exports = router;
