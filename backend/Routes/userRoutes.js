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

router.post('/signup', async (req, res) => {
    try {
        const { name, username, mail, password, age } = req.body;
        const existingUser = await User.findOne({$or: [{username}, {mail}]});
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }
        
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

// router.post('/users/login', async (req, res) => {
//     const { username, mail, password } = req.body;
//     const user = await User.findOne(user=>{$or [{username}, {mail}]});
//     if(!user){
//         return res.status(400).json({message: 'User not found'});
//     }
//     try{
//         const isMatch = bcrypt.compare(password, user.password);
//         if(!isMatch){
//             return res.status(400).json({message: 'Invalid credentials'});
//         }
//         else{
//             return res.status(200).json({message: 'Login successful'});
//         }
//     }
//     catch{
//         return res.status(500).json({message: 'Error during authentication'});
//     }
// });

router.post('/login', async (req, res) => {
    const { username, mail, password } = req.body;
    const user = await User.findOne({ $or: [ { username }, { mail } ] });
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }
    try {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        return res.status(200).json({ message: 'Login successful' });
    } catch {
        return res.status(500).json({ message: 'Error during authentication' });
    }
});
module.exports = router;