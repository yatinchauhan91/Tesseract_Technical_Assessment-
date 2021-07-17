const { ObjectId } = require('mongodb');

module.exports = {
  async up(db) {
    await db.collection('users').insertMany([
      {_id: ObjectId("60f2987674a892147c3852ff"), vehicle_number: 'MH-01-AB-1000',name : 'Raj', is_differently_abled: false},
      {_id: ObjectId("60f2987674a892147c385300"), vehicle_number: 'MH-01-AB-1001',name : 'Ram', is_differently_abled: true},
      {_id: ObjectId("60f2987674a892147c385301"), vehicle_number: 'MH-01-AB-1002',name : 'Raju', is_differently_abled: false},
      {_id: ObjectId("60f2987674a892147c385302"), vehicle_number: 'MH-01-AB-1003',name : 'Satish', is_differently_abled: true},
      {_id: ObjectId("60f2987674a892147c385303"), vehicle_number: 'MH-01-AB-1004',name : 'James', is_differently_abled: false},
      {_id: ObjectId("60f2987674a892147c385304"), vehicle_number: 'MH-01-AB-1005',name : 'Robert', is_differently_abled: false},
      {_id: ObjectId("60f2987674a892147c385305"), vehicle_number: 'MH-01-AB-1006',name : 'Sam', is_differently_abled: false},
      {_id: ObjectId("60f2987674a892147c385306"), vehicle_number: 'MH-01-AB-1007',name : 'John', is_differently_abled: false},
      {_id: ObjectId("60f2987674a892147c385307"), vehicle_number: 'MH-01-AB-1008',name : 'David', is_differently_abled: false},
      {_id: ObjectId("60f2987674a892147c385308"), vehicle_number: 'MH-01-AB-1008',name : 'Thomas', is_differently_abled: true},
      {_id: ObjectId("60f2987674a892147c385309"), vehicle_number: 'MH-01-AB-1010',name : 'Mark', is_differently_abled: false},
    ]);
  },
  async down(db) {
    db.collection('users').drop();
  }
};


