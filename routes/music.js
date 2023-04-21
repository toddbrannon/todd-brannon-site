var express = require('express');
var router = express.Router();

/* GET music page */
router.get('/music', function(req, res, next) {
  res.render('music', { title: 'Todd Brannon'});
});

module.exports = router;
