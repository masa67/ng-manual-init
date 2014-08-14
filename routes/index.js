var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendfile('./public/index.html');
});

/* POST to authentication. */
router.post('/web/api/authentication', function(req, res) {
    res.send(
        { msg: 'ok'}
    );
});

module.exports = router;
