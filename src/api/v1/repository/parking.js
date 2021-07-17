const { ObjectId } = require('mongodb');

const availableParkingSlots = async (next) => {
    try {
        const totalParking = await mongoConnection.collection("parkings").findOne({ _id: ObjectId("60f2b56e266c952854581c4a") });
        const allotedParkings = await mongoConnection.collection("parking_slot").aggregate([
            { $lookup: { from: 'users', localField: 'user_id', foreignField: '_id', as: 'user' } },
            { $unwind: '$user' },
            { $project: { parking_number: '$parking_number', user_id: '$user_id', is_differently_abled: '$user.is_differently_abled' } }
        ]).toArray();
        const isdifferentlyAbledReservedParkings = allotedParkings.map(data => data.is_differently_abled && data.parking_number);
        const isGeneralReservedParkings = allotedParkings.map(data => !data.is_differently_abled && data.parking_number)
       
        const avialableReservedParkings = [];
        for (let index = totalParking.reserved_parking_start; index <= totalParking.reserved_parking_end; index++) {
            if (!isdifferentlyAbledReservedParkings.includes(index))
                avialableReservedParkings.push({ parking_number: index })
        }

        const avialableGeneralParkings = [];
        for (let index = totalParking.general_parking_start; index <= totalParking.general_parking_end; index++) {
            if (!isGeneralReservedParkings.includes(index))
                avialableGeneralParkings.push({ parking_number: index })
        }

        return {
            totalAvialableReservedParkings: avialableReservedParkings.length,
            totalAvialableGeneralParkings:avialableGeneralParkings.length,
            avialableReservedParkings,
            avialableGeneralParkings
        };
    } catch (error) {
        console.log(`Error in availableParkingSlots function : ${error}`);
        next(error);
    }
};

const occupiedParkingSlots = async (id, next) => {
    try {
        return await mongoConnection.collection("parking_slot").find().toArray();
    } catch (error) {
        console.log(`Error in occupiedParkingSlots function : ${error}`);
        next(error);
    }
};

const registeredUsers = async (next) => {
    try {
        return await mongoConnection.collection("users").count();
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