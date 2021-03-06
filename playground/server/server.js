const _ = require('lodash');

const express = require('express');
const bodyparser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose.js');
var { Tobe } = require('./models/tobe');
var { User } = require('./models/user');
var {authenticate} = require('./middleware/authenticate')

const port = process.env.port || 3000;

var app = express();

app.use(bodyparser.json());

app.post('/tobes', (req, res) => {
    var tobe = new Tobe({
        text: req.body.text
    });
    tobe.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

app.get('/tobes', (req, res) => {
    Tobe.find().then((tobes) => {
        res.send({ tobes });
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/tobes/:id', (req, res) => {
    // res.send(req.params);
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    }
    Tobe.findById(id).then((Tobe) => {
        if (!Tobe) {

            res.status((400).send());
        }
        res.send({ Tobe });

    }).catch((e) => {
        res.status(400).send();
    });
});

app.delete('/tobes/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    }
    Tobe.findByIdAndRemove(id).then((tobe) => {
        if (!tobe) {
            return res.status(400).send();
        }
        res.send(tobe)

    }).catch((e) => {
        res.status(400).send();
    });
});

app.patch('/tobes/:id', (req, res) => {
    var id = req.params.id;
    //  var id =req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    }
    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();

    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Tobe.findByIdAndUpdate(id, { $set: body }, { new: true }).then((tobe) => {
        if (!tobe) {
            return res.status(400).send();
        }
        res.send({ tobe });
    }).catch((e) => {
        res.status(400).send();
    })
});


// user modell

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {

        return user.generateAuthToken();
        // res.send(user);
    }).then((token) => {
        res.header('x-auth', token).send(user);

    }).catch((e) => {
        res.status(400).send(e);
    });
});

//user GET metode with security auth



app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});

//login user 

app.post('/user/login', (req, res) =>{
    var body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email,body.password).then ((user) =>{

return user.generateAuthToken().then((token) =>{
    res.header('x-auth', token).send(user);
});

  }).catch((e) =>{
  res.status(400).send();
  });
});
//delete token or logout

app.delete('/user/me/token', authenticate,(req,res) =>{
req.user.removeToken(req.token).then(() =>{
     res.status(200).send();
},()=>{
    res.status(400).send();
});
});


app.listen(port, () => {
    console.log(`started on port ${port}`);
});



