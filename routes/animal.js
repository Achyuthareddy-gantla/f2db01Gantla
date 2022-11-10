// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('animal', { title: 'Search Results Animal' });
// });

// module.exports = router;

var express = require('express');
const animal_controlers= require('../controllers/animal');
var router = express.Router();
/* GET costumes */
router.get('/', animal_controlers.animal_view_all_Page );
module.exports = router;