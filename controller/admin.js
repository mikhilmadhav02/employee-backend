const tasks = require('../model/usermodel')


exports.login= async(req,res)=>{
    console.log('hello moto');
     const{username,password}=req.body
   console.log(`username==${username}passwordvalue==${password}`)
  const users = await tasks.findOne({username,password})
  console.log(users);
  res.status(201).json(users)
}

exports.createmploye=async(req,res)=>{
    const{user,pass,id,name,username,password,mobile,email,image,address,position}=req.body
    const newuser =await tasks.findOne({username:user,password:pass})
    console.log('newuser=====',newuser);
    
    newuser.employees.push({reviews:[],id,name,username,password,image,mobile,email,position,address})
   await newuser.save()
    res.status(200).json('employee details added')
}

//  viewemployee
 exports.updatemploye=async(req,res)=>{
     console.log('heloo mr perera');
     const {user,pass,id,name,address,image,position,username,password,mobile,email}=req.body
     console.log('user values=======',req.body);
     const newuser= await tasks.findOne({username:user,"employees.id":id})

console.log('updated user====',newuser);

 }

//  delete employe

exports.delete=async(req,res)=>{
  const {id}= req.params
  username='mikhil'
  password=1000
  console.log('delete id ==',id);
   await tasks.findOneAndUpdate({username},{$pull:{employees:{id:id}}},{new:true})
  res.status(200).json('success')
}

// review call
exports.reviewcall=async(req,res)=>{
  const{employeusername,employepassword,username,password,one,two,three,four,id}=req.body
console.log('reviews===', req.body);

 const newuser=await tasks.findOneAndUpdate({username},{$push:{employees:{id:id}}},{new:true})
  
  
    console.log(newuser);

}