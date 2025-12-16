console.log('Loading Stuff routes...');

const express = require('express');
const router = express.Router();

const stuffCtrl = require('../Controllers/Stuff');

router.get('/', stuffCtrl.getAllStuff);
router.post('/', stuffCtrl.createThing);
router.get('/:id', stuffCtrl.getOneThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id', stuffCtrl.deleteThing);

module.exports = router;