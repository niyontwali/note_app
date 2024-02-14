// import express
const express = require('express');
const { notes } = require('../utils');

// define router // creating an instance of Router 
const router = express.Router()


router.get("/" , (req, res) => {  
    return res.status(200).json({
        message: "All notes",
        data: notes
    })
})
// export the router
module.exports = router 

