const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fristcode')
.then(()=>{console.log('your connection is successful')})
.catch((err)=>{console.log(`your connection is ${err}`)})


const myScyme = new  mongoose.Schema({
    name : String,
    collage : String,
})


const todysun = new mongoose.model('fristTable',myScyme);

const call = new todysun({
    name : 'bayjit',
    collage : 'khanpur'
})


call.save();