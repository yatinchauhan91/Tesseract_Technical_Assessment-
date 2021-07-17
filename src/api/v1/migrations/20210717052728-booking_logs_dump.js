const { ObjectId } = require('mongodb');
const moment = require('moment');

module.exports = {
  async up(db) {
    await db.collection('booking_logs').insertMany([
      {
        user_id: ObjectId("60f2987674a892147c3852ff"),
        expiry_at: moment(moment().add(1, 'm').toDate()).add(15, 'm').toDate(),
        parking_slot_id: ObjectId("60f2b2e269080a2e04f4a4c9"),
        is_expired: true,
        is_parking_allotted: true,
        is_arrived: true,
        created_at: moment().add(1, 'm').toDate(),
        updated_at: moment(moment().add(1, 'm').toDate()).add(10, 'm').toDate()
      },
      {
        user_id: ObjectId("60f2987674a892147c385300"),
        expiry_at: moment(moment().add(2, 'm').toDate()).add(15, 'm').toDate(),
        parking_slot_id: ObjectId("60f2b2e269080a2e04f4a4ca"),
        is_expired: true,
        is_parking_allotted: true,
        is_arrived: true,
        created_at: moment().add(2, 'm').toDate(),
        updated_at: moment(moment().add(2, 'm').toDate()).add(10, 'm').toDate()
      },
      {
        user_id: ObjectId("60f2987674a892147c385301"),
        expiry_at: moment(moment().add(3, 'm').toDate()).add(15, 'm').toDate(),
        parking_slot_id:ObjectId("60f2b2e269080a2e04f4a4cb"),
        is_expired: true,
        is_parking_allotted: true,
        is_arrived: true,
        created_at: moment().add(3, 'm').toDate(),
        updated_at: moment(moment().add(3, 'm').toDate()).add(10, 'm').toDate()
      },
      {
        user_id: ObjectId("60f2987674a892147c385302"),
        expiry_at: moment(moment().add(4, 'm').toDate()).add(15, 'm').toDate(),
        parking_slot_id: ObjectId("60f2b2e269080a2e04f4a4cc"),
        is_expired: true,
        is_parking_allotted: true,
        is_arrived: true,
        created_at: moment().add(4, 'm').toDate(),
        updated_at: moment(moment().add(4, 'm').toDate()).add(10, 'm').toDate()
      },
      {
        user_id: ObjectId("60f2987674a892147c385303"),
        expiry_at: moment(moment().add(5, 'm').toDate()).add(15, 'm').toDate(),
        parking_slot_id: ObjectId("60f2b2e269080a2e04f4a4cd"),
        is_expired: true,
        is_parking_allotted: true,
        is_arrived: true,
        created_at: moment().add(5, 'm').toDate(),
        updated_at: moment(moment().add(5, 'm').toDate()).add(10, 'm').toDate()
      }, {
        user_id: ObjectId("60f2987674a892147c385304"),
        expiry_at: moment(moment().add(6, 'm').toDate()).add(15, 'm').toDate(),
        parking_slot_id: ObjectId("60f2b2e269080a2e04f4a4ce"),
        is_expired: true,
        is_parking_allotted: true,
        is_arrived: true,
        created_at: moment().add(6, 'm').toDate(),
        updated_at: moment(moment().add(6, 'm').toDate()).add(10, 'm').toDate()
      },
      {
        user_id: ObjectId("60f2987674a892147c385305"),
        expiry_at: moment(moment().add(7, 'm').toDate()).add(15, 'm').toDate(),
        is_expired: true,
        is_arrived: true,
        is_parking_allotted: false,
        created_at: moment().add(7, 'm').toDate(),
        updated_at: moment(moment().add(7, 'm').toDate()).add(25, 'm').toDate()
      },
      {
        user_id: ObjectId("60f2987674a892147c385306"),
        expiry_at: moment(moment().add(8, 'm').toDate()).add(15, 'm').toDate(),
        is_expired: true,
        is_arrived: true,
        is_parking_allotted: false,
        created_at: moment().add(8, 'm').toDate(),
        updated_at: moment(moment().add(8, 'm').toDate()).add(25, 'm').toDate()
      },
      {
        user_id: ObjectId("60f2987674a892147c385307"),
        expiry_at: moment(moment().add(9, 'm').toDate()).add(15, 'm').toDate(),
        is_expired: true,
        is_parking_allotted: false,
        created_at: moment().add(9, 'm').toDate()
      },
      {
        user_id: ObjectId("60f2987674a892147c385308"),
        expiry_at: moment(moment().add(10, 'm').toDate()).add(15, 'm').toDate(),
        is_expired: true,
        is_arrived: true,
        is_parking_allotted: false,
        created_at: moment().add(10, 'm').toDate(),
        updated_at: moment(moment().add(10, 'm').toDate()).add(25, 'm').toDate()
      },
    ]);
  },
  async down(db) {
    db.collection('booking_logs').drop();
  }
};
