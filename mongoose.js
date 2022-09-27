const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/teacher')
.then(()=>{console.log('your connection is successful')})
.catch((err)=>{console.log(`your connections is ${err}`)})

const mydata = new mongoose.Schema({
    name : {
        type: String,
        require : true,
    },
    home : String,
    roll : Number,
    active : Boolean
})

const teacherdata = new mongoose.model('shaber ahmad',mydata)

const data = async()=>{
try{
    const info = new teacherdata({
        name : 'robiul vatija',
        home : 'khulna',
        roll : 33,
        active : true
    })
    const js = new teacherdata({
        name : 'javascript',
        home : 'goole',
        roll : 2,
        active : false
    })
    const node = new teacherdata({
        name : 'express',
        home : 'node.js',
        roll : 3,
        active : true
    })
    
    await teacherdata.insertMany([info,js,node])
    console.log(teacherdata)
}catch(err){
    console.log(err)
}
   
}


data()

