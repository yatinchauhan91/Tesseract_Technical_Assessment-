const router = require('express').Router();
const parkingController = require('../controller/parking');

router.get('/availableParkingSlots', parkingController.availableParkingSlots); 
router.get('/occupiedParkingSlots', parkingController.occupiedParkingSlots); 
router.get('/registeredUsers', parkingController.registeredUsers); 

module.exports = router;