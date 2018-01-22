var express = require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': '64bd9021-fa19-4234-b32b-a74755a88ab8',
  'password': 'KoizkXzepgRT',
  'version_date': '2017-02-27'
});

router.post('/', function(req, res) {
  var parameters = {
    'html': JSON.stringify(req.body.value),
    'features': {
      'emotion': {}
    }
  };

  natural_language_understanding.analyze(parameters, function(err, response) {
    if (err) {
      res.status(err.code);
      res.send(err);
    } else {
      res.send(response);
    }
  });
})

module.exports = router;
