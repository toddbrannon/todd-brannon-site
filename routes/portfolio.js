var express = require('express');
var router = express.Router();

/* GET work page. */
router.get('/', function(req, res, next) {
  res.render('portfolio', { title: 'Todd Brannon' });
});


module.exports = router;
