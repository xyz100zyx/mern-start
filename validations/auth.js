import {body} from 'express-validator';

export const registerValidation = [
    body('email', 'Uncorrect format type of email').isEmail(),
    body('password', 'Uncorrect length of password').isLength({min: 5}),
    body('fullName', 'Uncorrect length of fullname').isLength({min: 3}),
    body('avatarUrl', 'Uncorrect link on avatar url').optional().isURL(),

];