var mongoose=require('mongoose');

var Tobe = mongoose.model('Tobe', {
    text: {
        type: String,
        required:true,
        trim:true
    },
    completed: {
        type: Boolean,
        default:false

    },
    completedAt: {
        type: Number,
        default:false

    }
});
module.exports={Tobe};
