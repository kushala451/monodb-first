const{ObjectID} =require('mongodb');

const {mongoose} = require('././server/db/mongoose');
const{Tobe} = require('././server/models/tobe');
const{User} = require('././server/models/user');


var id='5eb467bfecd7ac384c32f2cc';

// Tobe.find({
//     _id:id
// }).then((Tobes) => {
//  console.log('Tobes',Tobes);
// });

// Tobe.findOne({
     
//     _id:id
// }).then((Tobe) => {
//  console.log('Tobe',Tobe);
// });

// Tobe.findById(id).then((tobe) => {
//     if (!tobe){
//         return console.log('id not found');
//     }
//     console.log('Tobe by Id',tobe);
// }).catch((e) => console(e));

User.findById('5eb4705f8018120e2480bd7b').then((user) =>{
    if(!user){
        return console.log('Unable find user');
    }
    console.log(JSON.stringify(user,undefined,2));
},(e) =>{
    console.log(e);
});