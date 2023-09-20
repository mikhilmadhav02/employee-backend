const express = require('express')
const admin = require('../controller/admin')
const router = new express.Router()





// login
router.post('/login',admin.login)
// post new employee
router.post('/createmploye',admin.createmploye)
// update employee
 router.post('/updatemploye',admin.updatemploye)
// delete employe
router.delete('/delete/:id',admin.delete)
// reviewcall
router.post('/reviewcall',admin.reviewcall)



module.exports=router