const express = require('express')
const router = express.Router();

router.get('/home',(req,res,next)=>{
    res.send('<h1>This is your home page api</h1>')
})
module.exports=router;