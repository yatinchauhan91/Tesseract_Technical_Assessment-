const parkingRepository = require('../repository/parking');

const availableParkingSlots = async (next) => {
    try {
        return await parkingRepository.availableParkingSlots(next);
    } catch (error) {
        console.log(`Error in availableParkingSlots function : ${error}`);
        next(error);
    }
};

const occupiedParkingSlots = async (id, next) => {
    try {
        return await parkingRepository.occupiedParkingSlots(next);
    } catch (error) {
        console.log(`Error in occupiedParkingSlots function : ${error}`);
        next(error);
    }
};

const registeredUsers = async (next) => {
    try {
        const totalUsers =  await parkingRepository.registeredUsers(next);

        return { totalUsers };
    } catch (error) {
        console.log(`Error in registeredUsers function : ${error}`);
        next(error);
    }
};

module.exports = {
    availableParkingSlots,
    occupiedParkingSlots,
    registeredUsers
};