var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('contact_success', { title: 'Todd Brannon' });
});

module.exports = router;
