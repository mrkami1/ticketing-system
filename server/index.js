const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/userModel')
require('dotenv').config();

//Backend

//test
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_LOGIN);

app.post('/api/register', async(req, res) => {
    console.log('Received registration info:' + req.body);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            accountType: 'user'
        });
        res.json({ status: '200 OK'});
    } catch(err) {
        res.json({ status: 'error', error: 'Email already exists'});
    }
    
})

app.post('/api/login', async(req, res) => {
    console.log('Received login info:' + req.body);
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    
    if (user) {
        return res.json({ status: '200 OK', user: true});
    }
    else return res.json({ status: 'error', user: false});
})
app.listen(5000, () => {
    console.log('Server started on port 5000');
})