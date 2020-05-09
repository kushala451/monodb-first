var express =require('express');
var bodyparser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Tobe} = require('./models/tobe');
var {User} =require('./models/user');

var app = express();

app.use(bodyparser.json());

app.post('/tobes',(req,res) =>{
    var tobe = new Tobe({
        text :req.body.text
    });
    tobe.save().then((doc) =>{
        res.send(doc);
    },(e) =>{
        res.status(400).send(e);
    });

});

app.get('/tobes', (req,res) =>{
    Tobe.find().then((tobes) =>
    {
        res.send({tobes});
    },(e) => {
        res.status(400).send(e);
    })
});

app.get('/tobes/:id',(req,res) =>{
    // res.send(req.params);
    var id =req.params.id;

    if(!ObjectID.isValid(id)){
return res.status(400).send();
    }
    Tobe.findById(id).then((Tobe) => {
 if(!Tobe){

    res.status((400).send);
 }
  res.send({Tobe});
         
    }).catch((e) => {
        res.status(400).send();
    });
});




app.listen(3000, () =>{
    console.log('started on port 3000');
});



