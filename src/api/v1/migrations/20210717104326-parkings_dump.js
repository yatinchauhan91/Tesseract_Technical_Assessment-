const { ObjectId } = require('mongodb');

module.exports = {
  async up(db) {
    await db.collection('parkings').insert([
      { _id: ObjectId("60f2b56e266c952854581c4a") ,general_parking_start: 25, general_parking_end: 120, reserved_parking_start: 1, reserved_parking_end: 24, is_slot_available: true }
    ]);
  },
  async down(db) {
    db.collection('parkings').drop();
  }
};
