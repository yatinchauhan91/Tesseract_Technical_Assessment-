const { ObjectId } = require('mongodb');

module.exports = {
  async up(db) {
    await db.collection('parking_slot').insertMany([
      { _id: ObjectId("60f2b2e269080a2e04f4a4c9"), user_id: ObjectId("60f2987674a892147c3852ff"), parking_number: 25 },
      { _id: ObjectId("60f2b2e269080a2e04f4a4ca"), user_id: ObjectId("60f2987674a892147c385300"), parking_number: 1 },
      { _id: ObjectId("60f2b2e269080a2e04f4a4cb"), user_id: ObjectId("60f2987674a892147c385301"), parking_number: 26 },
      { _id: ObjectId("60f2b2e269080a2e04f4a4cc"), user_id: ObjectId("60f2987674a892147c385302"), parking_number: 2 },
      { _id: ObjectId("60f2b2e269080a2e04f4a4cd"), user_id: ObjectId("60f2987674a892147c385303"), parking_number: 27 },
      { _id: ObjectId("60f2b2e269080a2e04f4a4ce"), user_id: ObjectId("60f2987674a892147c385304"), parking_number: 28 }
    ]);
  },
  async down(db) {
    db.collection('parking_slot').drop();
  }
};


