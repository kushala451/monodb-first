// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
  MongoClient.connect('mongodb://localhost:27017/Tobeapp',(err,db) => {
      if (err) {
          return console.log('Unable to connect to MongoDb Server');
      }
      console.log('Connected to MongoDb sever');
    //   db.collection('notes').find({ completed : false}).toArray().then((docs) => {
    //  db.collection('notes').findOneAndUpdate({
    //    _id: new ObjectID('5eb3cd40e4c2105310a6c106')
    //  },{
    //    $set: {
    //      completed:true
    //    }
    //  },{
    //    returnOriginal: false
    //  }).then((result) => {
    //    console.log(result);
    //  });
   db.collection('emp').findOneAndUpdate({
     _id:new ObjectID('5eb44de4d3457128f448a4e1')
   },{
     $set:{
      Nname:'Kushala Sunkara'
     },
     $inc:{
      age: 1
    }
  },{
       returnOriginal: false
     }).then((result) => {
       console.log(result);
     });
       //   db.close();
  });