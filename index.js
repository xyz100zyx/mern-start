import express, {json} from 'express';
import mongoose from 'mongoose';

import {registerValidation} from './validations/auth.js';
import checkAuth from "./utils/checkAuth.js";
import {login, register, getMe} from "./controllers/UserController.js";

mongoose.connect('mongodb+srv://artyomxyz:555@cluster0.eu7huqt.mongodb.net/blog?retryWrites=true&w=majority')
    .then(()=>{console.log('DB ok')})
    .catch(err => console.log('DB error', err))

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world')

})

app.get('/auth/me', checkAuth, getMe)

app.post('/auth/login', login)

app.post('/auth/register', registerValidation, register)

app.listen(4444, (error) => {
    if (error){
        return console.log(error)
    }

    console.log('server ok')
})