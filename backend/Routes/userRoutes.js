const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/users', async(req, res) => {{
   try{
    const users =  await User.find({},"-password");
    res.json(users);
   }
   catch(error){
    res.status(500).json({message: 'Error fetching users', error: error.message});
   }
}});

router.post('/users', async (req, res) => {
    try {
        const { name, username, mail, password, age } = req.body;
        // const salt = await bcrypt.genSalt();
        const hashpassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            name,
            username,
            mail,
            password: hashpassword,
            age
        });
        await user.save();
        res.status(201).json({message: 'User registered successfully'});
    }
    catch {
        res.status(500).json({message: 'Error registering user'});
    }
});

            
module.exports = router;