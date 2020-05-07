// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
  MongoClient.connect('mongodb://localhost:27017/Tobeapp',(err,db) => {
      if (err) {
          return console.log('Unable to connect to MongoDb Server');
      }
      console.log('Connected to MongoDb sever');
      db.collection('notes').insert({
          text:'Something to be',
          completed:false
      }, (err, result) => { 
          if(err){
              return console.log('unable to insert', err);
          }
          console.log(JSON.stringify(result.ops, undefined, 2));
      });
      db.collection('emp').insert({
        Nname:'ramesh',
        age: 28,
        empid:2019,
        location:'vizag',
        completed:false
    }, (err, result) => { 
        if(err){
            return console.log('unable to insert emplaoye', err);
        }
        console.log(result.ops);
    });
      db.close();
  });