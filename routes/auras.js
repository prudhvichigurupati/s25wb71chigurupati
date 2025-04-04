var express = require('express');
var router = express.Router();

/* GET auras page. */
router.get('/', function(req, res, next) {
  // Define the results array in the backend
  var results = [
    { color: "Indigo", intensity: 8, emotion_associated: "Clarity" },
    { color: "Green", intensity: 6, emotion_associated: "Calm" },
    { color: "Red", intensity: 9, emotion_associated: "Passion" }
  ];

  // Pass the results array to the view
  res.render('auras', { title: 'Search Results - Auras', results: results });
});

module.exports = router;
