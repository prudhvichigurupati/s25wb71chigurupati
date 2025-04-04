var express = require('express');
var router = express.Router();

/* GET auras page. */
router.get('/', function(req, res, next) {
  res.render('auras', { title: 'Search Results - Auras' });
});

module.exports = router;
