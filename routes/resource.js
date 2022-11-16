var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var animal_controller = require('../controllers/animal');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// animal ROUTES ///
// POST request for creating a animal.
router.post('/animals', animal_controller.animal_create_post);
// DELETE request to delete animal.
router.delete('/animals/:id', animal_controller.animal_delete);
// PUT request to update animal.
router.put('/animals/:id', animal_controller.animal_update_put);
// GET request for one animal.
router.get('/animals/:id', animal_controller.animal_detail);
// GET request for list of all animal items.
router.get('/animals', animal_controller.animal_list);
/* GET detail costume page */
router.get('/detail', animal_controller.animal_view_one_Page);

/* GET create costume page */
router.get('/create', animal_controller.animal_create_Page);

/* GET create update page */
router.get('/update', animal_controller.animal_update_Page);

/* GET delete costume page */
router.get('/delete', animal_controller.animal_delete_Page);

module.exports = router;
