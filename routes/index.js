var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todd Brannon' });
});

/* GET home (dev) page */
router.get('/index_dev', function(req, res, next) {
  res.render('index_dev', { title: 'Todd Brannon'});
});

/* GET home (dev) page */
// router.get('/music', function(req, res, next) {
//   res.render('music', { title: 'Todd Brannon'});
// });

module.exports = router;
