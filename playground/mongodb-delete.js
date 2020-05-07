// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
  MongoClient.connect('mongodb://localhost:27017/Tobeapp',(err,db) => {
      if (err) {
          return console.log('Unable to connect to MongoDb Server');
      }
      console.log('Connected to MongoDb sever');
    //   db.collection('notes').find({ completed : false}).toArray().then((docs) => {
 //deleteMany
//  db.collection('notes').deleteMany({text: 'Eat lunch'}).then((result) =>
//  {
// console.log(result);
//  })

 //deleteone
//  db.collection('notes').deleteOne({text: 'Eat lunch'}).then((result) =>
//  {
//    console.log(result);
//  });


 //find and delete.
//  db.collection('notes').findOneAndDelete({completed: false}).then((result) =>
//  {
//    console.log(result);
//  });
//
// db.collection('emp').deleteMany({Nname: 'ramesh'});
db.collection('emp').findOneAndDelete({_id : ObjectID('5eb44df4d3457128f448a4e2')}).then((results) => {
  console.log(JSON.stringify(results, undefined,2));
});

    //   db.close();
  });