const router = require('express').Router();

const parking = require("./parking");

router.use('/parking',parking);

module.exports = router;