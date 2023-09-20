const mongoose = require('mongoose')
const data = process.env.database

mongoose.connect(data,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('server connected to mongodb using mongoose');
}).catch(()=>{
    console.log('server issuses while connecting to mongodb using mongoose');
})