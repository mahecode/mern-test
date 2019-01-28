var mongoose = require('mongoose');
var Product = require('../models/product');

mongoose.connect('mongodb://localhost:27017/MERN');

var products = [
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg',
        title: 'God of war',
        description: 'God of war is action adventure game',
        price: 170
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg',
        title: 'God of war',
        description: 'God of war is action adventure game',
        price: 170
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg',
        title: 'God of war',
        description: 'God of war is action adventure game',
        price: 170
    })
];

var count = 0;

for(var i=0;i<products.length; i++){
    products[i].save((err,result)=>{
        count++;
        if(count==products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}