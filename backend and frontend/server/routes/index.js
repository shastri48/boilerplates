const express = require('express');
const router = express.Router()
router.get('/', (err, res)=>{
  res.render('index');
})
module.exports =router;