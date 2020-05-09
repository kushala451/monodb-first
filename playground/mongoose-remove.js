const{ObjectID} =require('mongodb');

const {mongoose} = require('./server/db/mongoose');
const{Tobe} = require('./server/models/tobe');
const{User} = require('./server/models/user');

// Tobe.remove({}).then((result) => {

//     console.log(result);
// });

Tobe.findOneAndRemove({_id:'5eb6ede24f106d34e453b089'}).then((Tobe) =>{
    console.log(Tobe);
});

Tobe.findByIdAndRemove('5eb6ede24f106d34e453b089').then((Tobe) =>{
console.log(Tobe);
});