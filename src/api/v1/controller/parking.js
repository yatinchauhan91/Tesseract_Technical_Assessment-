const parkingService = require('../service/parking');

const availableParkingSlots = async (req, res, next) => {
    const data = await parkingService.availableParkingSlots(next);

    return res.send({ status: 200, data });
};

const occupiedParkingSlots = async (req, res, next) => {
    const data = await parkingService.occupiedParkingSlots(next);

    return res.send({ status: 200, data });
};

const registeredUsers = async (req, res, next) => {
    const data = await parkingService.registeredUsers(next);

    return res.send({ status: 200, data});
};

module.exports = {
    availableParkingSlots,
    occupiedParkingSlots,
    registeredUsers
};