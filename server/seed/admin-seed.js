var mongoose = require('mongoose');
var Admin = require('../models/admin');

mongoose.connect('mongodb://localhost:27017/MERN');

var admin = new Admin();
admin.name = "Mahesh";
admin.email = "maheshm@m.com";
admin.password = admin.encryptPassword('mahesh');
    


admin.save((err, result)=>{
    if(err){
        return console.log(err);
    }
    exit();
});

function exit(){
    mongoose.disconnect();
}


