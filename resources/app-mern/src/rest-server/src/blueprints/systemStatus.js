var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // very important otherwise CORS error.
    // browser security is enabled that it does not allow to use cross domain data.
    res.send({cpu:1, os:'windows'});
})

module.exports = router;