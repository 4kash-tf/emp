const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Akash:shaka@boommaster.tflku.mongodb.net/?retryWrites=true&w=majority&appName=boommaster')
    .then(() => {
        console.log('Connected !');
    })
    .catch((error)=> {
    console.log(error);
    })