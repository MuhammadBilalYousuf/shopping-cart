var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
   imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Video Game',
    description: 'Awesome Game',
    price: 100
}),
    new Product({
   imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/%D0%A4%D0%B5%D0%B9%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%BA_%D0%B2_%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%BC_%D0%BF%D0%BE%D1%80%D1%82%D1%83_%D0%A1%D0%BE%D1%87%D0%B8_9_%D0%BC%D0%B0%D1%8F_2015_%D0%B3%D0%BE%D0%B4%D0%B0.jpg/500px-%D0%A4%D0%B5%D0%B9%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%BA_%D0%B2_%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%BC_%D0%BF%D0%BE%D1%80%D1%82%D1%83_%D0%A1%D0%BE%D1%87%D0%B8_9_%D0%BC%D0%B0%D1%8F_2015_%D0%B3%D0%BE%D0%B4%D0%B0.jpg',
    title: 'A more Video Game',
    description: 'Awesome Game 2',
    price: 200
}),
       new Product({
   imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/1mapocho_agua_de_luz.jpg/120px-1mapocho_agua_de_luz.jpg',
    title: 'Anothe Video Game',
    description: 'Awesome Game 3',
    price: 300
})
    ];
var done = 0;
for (var i=0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length) {
        exit();    
        }
    });
}

function exit(){
    mongoose.disconnect();
}