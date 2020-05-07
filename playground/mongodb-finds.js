// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
  MongoClient.connect('mongodb://localhost:27017/Tobeapp',(err,db) => {
      if (err) {
          return console.log('Unable to connect to MongoDb Server');
      }
      console.log('Connected to MongoDb sever');
    //   db.collection('notes').find({ completed : false}).toArray().then((docs) => {
    //       console.log('notes');
    //       console.log(JSON.stringify(docs, undefined,2));
    //   },(err) => {
    //       console.log('unable to fetch Notes', err);
    //   });
    db.collection('emp').find({Nname : 'kushal'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined,2));
    })
    //   db.close();
  });