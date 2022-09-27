const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myhome')
.then(()=>{console.log('connection is successful')})
.catch((err)=>{console.log(err)})

const listSchema = new mongoose.Schema({
    name : {
        type :String,
        require :true
    },
    home : String,
    roll : Number,
    active : Boolean,
})

const PlayList = new mongoose.model('PlayList',listSchema)

const createDocument = async()=>{
try{
    const reactPlaylist = new PlayList({
        name : 'mijan mama',
        home : 'khulna',
        roll : 102,
        active: true,
    })
    
    await reactPlaylist.save();
 
}catch(err){
    console.log(err)
}

}

createDocument();